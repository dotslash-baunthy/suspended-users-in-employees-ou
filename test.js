function test() {
    let response = AdminDirectory.Users.list({
        "customer": "my_customer",
        "fields": "users/primaryEmail, users/orgUnitPath",
        "maxResults": 1
    });
    Logger.log(response.users[0]);
}

function test_2() {
    Logger.log(usersData[3][0]);
}