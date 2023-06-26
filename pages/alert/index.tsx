import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import Topbar from "../../components/Topbar";
import axios from "axios";
import { MdNotificationsActive } from "react-icons/md";
import Head from "next/head";

const VISIBLE_FIELDS = ["title", "message", "dateCreated"];

export default function index() {
  const [allAlerts, setAlerts] = React.useState([]);

  const { data } = useDemoData({
    dataSet: "Commodity",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  React.useEffect(() => {
    // Getting Alerts
    const FormData = require("form-data");
    let data = new FormData();
    data.append("id", "75");
    data.append("type", "tech");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://smartcare.com.np/techsewa/publicControl/getAlertByToken",
      // headers: {
      //   ...data.getHeaders(),
      // },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        const data = response?.data;
        let updatedData = data.map((item: any, index: any) => ({
          id: index,
          SN: index + 1,
          Title: item?.title,
          Message: item?.message,
          Created_On: item?.created_ts,
        }));
        console.log("set datas ", updatedData);
        setAlerts(updatedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(allAlerts);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Technical Sewa | Alerts</title>
        <meta  name="description"  content="Technical Sewa Pvt. Ltd is a leading national company that deals with various repairing and maintenance services of multi brands and multi products viz. mobile devices, electronics and home appliances. With our years of experience, we are nationally recognized as an expert in customer support services and in repair and maintenance services.   " />
      </Head>
      <Topbar />
      <div className="md:w-[80rem] xsm:w-full m-auto mt-16 px-5 ">
        <div className="flex items-center text-[25px] gap-2 border-b-2 w-24 border-[var(--primary-color)]">
          <h2 className="">Alerts</h2>
          <MdNotificationsActive />
        </div>
        <div
          style={{ height: 400, width: "100%", overflowX: "auto" }}
          className="mt-10"
        >
          <DataGrid
            autoPageSize
            // {...data}
            rows={allAlerts}
            columns={[
              { field: "SN", width: 50 },
              { field: "Title", width: 180 },
              { field: "Message", width: 450 },
              { field: "Created_On", width: 200 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
