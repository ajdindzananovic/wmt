import moment from "moment";
import { saveDomain } from "../_services/domainServices";

export async function saveDomainInfoFormToDatabase(
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
  const allData = {
    siteName,
    siteRegistredFromDate,
    endOfActivityDate,
    domainOwner,
    personForPayment,
    personForAdministration
  };
  //axios(tstdatum,siteName,domainOwner)
  await saveDomain(allData);
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
