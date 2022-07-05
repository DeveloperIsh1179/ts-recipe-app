import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_vMz61D3Ny',
  ClientId: '6tbs22jd58v5oi9pv7farhiadq',
};

const cognitoUserPool = new CognitoUserPool(poolData);

export const createCognitoSignUp = async (
  email: string,
  password: string,
  name: string,
) => {
  const attributeList = [];

  const dataEmail = {
    Name: 'email',
    Value: email,
  };

  const dataName = {
    Name: 'name',
    Value: name,
  };

  const attributeEmail = new CognitoUserAttribute(dataEmail);
  const attributeName = new CognitoUserAttribute(dataName);

  attributeList.push(attributeEmail);
  attributeList.push(attributeName);

  cognitoUserPool.signUp(
    email,
    password,
    attributeList,
    null!,
    (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    },
  );
};

export const signInCognito = (
  username: string,
  password: string,
): Promise <CognitoUserSession> => new Promise((resolve) => {
  const cognitoUser = new CognitoUser({
    Username: username,
    Pool: cognitoUserPool,
  });

  const authDetails = new AuthenticationDetails({
    Username: username,
    Password: password,
  });

  cognitoUser.authenticateUser(authDetails, {
    onSuccess: (data) => {
      resolve(data);
    },
    onFailure: (err) => {
      resolve(err);
    },
  });
});
