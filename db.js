import admin from 'firebase-admin'

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "hackaton-t3",
        "private_key_id": "517a7826a39f9cdc791feee889b5932e2b591ec9",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDV+9ntePgqb78D\nCWX/rtFm0cVlKgtO94Axuz/yaiy2J3UUfN9Vb12M1HAtMIia2ALgPm1YbtEFD33o\ndboiayf4MnvxC7A8dHR8bu496mhNZBE7ur9wjeqxeZ3gG+m4i2aEPdaXV3Vxc+ai\nzhP/sBnl7S2+gFQrUyg8pXNIipzrtjl7vEZC3TeKldxYYd71khUGOqCd/X5IVQVN\nIoB4ZpFbkGF1afliYpdO7kZs1BT2V9T6AulQrp/fKBjXao3QzDEqhVN28sfQ/9pN\ne2Qxv55Slzn8noH0o8OPSaexopnqAEuorejoloyJO8q9aN1R/jXbMsGPGE5Qpr+E\nmARrhksFAgMBAAECggEAGBnpRk+BOBpk+70TwXQZvshywL23D1peFHvgLHgb+BpC\nnB+icfd8pG+LAPP99t7MmCA/5Z15qmW/yy5zXAwQsOpSvmgQHgcJ1bgS2mNsAwd5\nz23twQoi/IFTsFnEfdYpokxqvpoJrtEckYq/guV9TUHlDJdco5KWrhn+fZWrLfsf\n2YPQWG1+OordD8C7Jro8tSdHUSjSt7/WZE3wtJVjghZw2zjAKpMvEKz1osz6jYH8\nHJJnr3pVldn6EnUWhgGzdwT2bo0Svto9E/CAGPPAXjEwJ33ncWsH78vXa9admHZb\njlMtB97yutuB4CXF2Ip22WqUIWsMFUxdNfswjB+tswKBgQD/pPeEAR0tWWaquDCo\n1fYPQUA7hq7OOAIFo+SVOc/WtMe2kv+tEOXGY77+48c8ARQPiyZKpAt+jbh6NGSi\n8zY970VY0pE3aZSFDSPJGzYg0TS0/fe/lOmaW4LOf8yDQjdSM4d40QS4JDm2jXJW\niUBzijf7ipfSR3tjNcnDRuC9NwKBgQDWSAykAaFKF1f1Rri/z0Yr1gHRVWHNKKsn\nVOKsDekKv6/R/9I96g5ILNpViZ5Swl5eHZF5TzASn8dmk6dcC3GoObn44+ZUxaYe\nxzcOXs0A7qEFQdyar/aZH/Jdq8ZCP0HbAEiRuzbOG01YtlSd+Z0gtKOH9JyX+hoo\niLWlp/E3owKBgAl7lg7Yd7uZ6FwGzw9EOIdiVT6gBVXy7+hDpxP9+/6r4AietUs3\nKD7OrmQIEPjh1VuqPrZgFWkRWrl1vhHpUabEfF8KGIbkrLSuwxgPoVdgS0M3dHwv\nyuaF5HlCdlScHS84aBsMLc+i0F08K/SXzMM8ak0zW+RZ8HLCqQRMWcPLAoGAR7JD\nyHxjIw88duz60/LeX7xzTz9qQeLhoX9deIQO/XG1umYGSoEN1khrpUMunjI6sPLj\nwdslEpYzebbdwIZzuP3Xo9ddMfAP7Sxq13wQy8cMSV4IGhnWQNXXmk/nPjM8LbKi\nlWA2ri+kaZJYLaNfV5oZPVwzKQadygI0BQF0TFECgYEA7vgGY/pWLUlsatmiNUpj\ndlZ+k04tVepnjb+XlH4yCTEFfRPGCMDZLy1e6AsvLfZISQ430J9L/RNqkQZIlphH\nvBKJTAhrj6oGpcVgVNb/77RMwfymUS9BdXJOPxVDZYaNaOemwDY0Ut9TjP7yBuMk\nmoBj/jq5gKkFlf9AZIb4cpQ=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-rql92@hackaton-t3.iam.gserviceaccount.com",
        "client_id": "115335210056781463332",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rql92%40hackaton-t3.iam.gserviceaccount.com"
    })
});

const db = admin.firestore()

export default db

