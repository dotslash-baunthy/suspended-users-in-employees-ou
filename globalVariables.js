const rootSheet = SpreadsheetApp.getActive();

const usersSheet = rootSheet.getSheetByName("Users");
const usersData = usersSheet.getDataRange().getValues();

Logger = BetterLog.useSpreadsheet("1AVUlzonp65Kzi0I5oKGnv_MCWMr-5R_aOSdUmK8YrKw", "Logs");