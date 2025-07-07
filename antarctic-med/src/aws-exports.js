const awsmobile = {
    "aws_project_region": "us-west-2",
    "aws_cognito_region": "us-west-2",
    "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
    "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
    oauth: {
        domain: process.env.REACT_APP_DOMAIN,
        scope:["openid", "email", "phone"],
        redirectSignIn: "http://localhost:3000/signin",
        redirectSignOut: "http://localhost:3000/signin",
        responseType: "code"
    }
};

export default awsmobile;