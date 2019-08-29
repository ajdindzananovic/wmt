import moment from "moment";

export function saveDomainInfoFormToDatabase(
  siteRegistredFromDate,
  endOfActivityDate,
  siteName,
  domainOwner,
  personForPayment,
  personForAdministration
) {
  console.log(siteRegistredFromDate);

  let testDatum = moment(siteRegistredFromDate).format("DD.MM.YYYY");

  // let testDatum = moment(siteRegistredFromDate, "dd.MM.yyyy")
  //   .utc()
  //   .format();

  //let testDatum2 = moment.utc().format();

  // let testDatum = moment.(siteRegistredFromDate);
  console.log("testDatum");
  console.log(testDatum);

  //axios(tstdatum,siteName,domainOwner)
}

export function getDomainInfoDataFromDatabase() {
  return {
    siteRegistredFromDate: moment("25.09.2019", "DD-MM-YYYY").toDate(),

    endOfActivityDate: new Date(),

    data: {
      siteName: "4",
      domainOwner: "5",
      personForPayment: "6",
      personForAdministration: "7"
    }
  };
}
