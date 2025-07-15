const awsmobile = {
    "aws_project_region": "us-west-2",
    "aws_cognito_region": "us-west-2",
    "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
    "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
    oauth: {
        domain: process.env.REACT_APP_DOMAIN,
        scopes: [ "openid", "email" ],
        redirectSignIn: [ "http://localhost:3000/signin", "https://antartiqcmed.org/signin", process.env.REACT_APP_CALLBACK_SIGNIN ],
        redirectSignOut: [ "http://localhost:3000", "https://antartiqcmed.org" ],
        responseType: "code"
    }
};

export default awsmobile;