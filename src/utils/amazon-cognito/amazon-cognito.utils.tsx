import {
  CognitoUserPool,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_Bui1KkGWV',
  ClientId: '2rtmgbtsnh5avq80cn4cal0obq',
};

const cognitoUserPool = new CognitoUserPool(poolData);

export const createCognitoSignUp = async (
  email: string,
  password: string,
  userName: string,
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

  await cognitoUserPool.signUp(
    userName,
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
