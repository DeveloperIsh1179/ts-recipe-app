import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
  ISignUpResult,
} from 'amazon-cognito-identity-js';

const UserPoolId = process.env.REACT_APP_COGNITO_USER_POOL_ID;
const ClientId = process.env.REACT_APP_COGNITO_CLIENT_ID;

const cognitoUserPool = new CognitoUserPool({
  UserPoolId,
  ClientId,
});

export const createCognitoSignUp = async (
  email: string,
  password: string,
  name: string,
):Promise<ISignUpResult | Error | undefined> => new Promise((resolve, reject) => {
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
          resolve(err);
        }
        resolve(data);
      },
  );
});

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

export const getSessionCognito = async (): Promise<CognitoUserSession | Error | null> => new Promise((resolve, reject) => {
  const user = cognitoUserPool.getCurrentUser();
  if (user) {
    user.getSession((err: Error, session: CognitoUserSession | null) => {
      if (err) resolve(err);
      else resolve(session);
    });
  } else {
    reject();
  }
});
