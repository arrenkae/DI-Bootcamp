let rows = ["*", "* *", "* * *", "* * * *", "* * * * *", "* * * * * *"];

for (let row of rows) {
    console.log(row);
}

for (i=1; i<7; i++) {
    let row = "";
    for (j=1; j<=i; j++) {
        row += "* "
    }
    console.log(row);
}