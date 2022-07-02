import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';

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

  cognitoUserPool.signUp(
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

export const signInCognito = (username: string, password: string) => {
  const authenticationData = {
    Username: username,
    Password: password,
  };

  const authenticationDetails = new AuthenticationDetails(
    authenticationData,
  );
  console.log('authenticationDetails', authenticationDetails);

  const userData = {
    Username: username,
    Pool: cognitoUserPool,
  };
  console.log('userData', userData);

  const cognitoUser = new CognitoUser(userData);

  console.log('cognitoUser', cognitoUser);

  return new Promise((resolve, reject) => cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      resolve(result);
    },
    onFailure: (err) => {
      reject(err);
    },
  }));
};
