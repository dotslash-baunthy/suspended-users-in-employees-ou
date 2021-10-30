function getUsersList() {
    let usersArr = [];
    let response;
    let pageToken = "";
    do {
        response = AdminDirectory.Users.list({
            "pageToken": pageToken,
            "customer": "my_customer",
            "maxResults": 500,
            "query": "isSuspended=true",
            "fields": "users/primaryEmail, nextPageToken, users/orgUnitPath"
        });
        if (response.users) {
            for (var i = 0; i < response.users.length; i++) {
                if (response.users[i].orgUnitPath == "/Employees") {
                    usersArr.push([response.users[i].primaryEmail]);
                }
            }
        } else {
            console.log("Nothing was received");
        }
        pageToken = response.nextPageToken;
    } while (response.nextPageToken);
    usersSheet.getRange("A2:A" + (usersArr.length + 1)).setValues(usersArr);
}

function getReports() {
    if (usersData.length < 2) {
        console.log("Users sheet is empty");
    } else {
        let userId = "";
        for (var i = 1; i < usersData.length; i++) {
            userId = usersData[i][0];
            Logger.log(AdminReports.Activities.list("all", "admin", {
                "eventName": "SUSPEND_USER",
                "filters": "USER_EMAIL==" + userId
            }));
        }
    }
}