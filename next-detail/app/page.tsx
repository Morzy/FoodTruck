"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Suspense, useEffect, useState } from "react";

const columnHeader = ["locationid", "Applicant", "FacilityType", "cnn", "LocationDescription", "Address", "blocklot", "block", "lot", "permit", "Status", "FoodItems", "X", "Y", "Latitude", "Longitude", "Schedule", "dayshours", "NOISent", "Approved", "Received", "PriorPermit", "ExpirationDate", "Location", "Fire Prevention Districts", "Police Districts", "Supervisor Districts", "Zip Codes", "Neighborhoods (old)"]


export default function Home() {
  const [tableList, setTableList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:3000/data').then(res => {
      setLoading(true);
      return setTableList(res.data);
    }).catch(e => {
      console.log(e);
    })
  }, [])

  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {loading ?
        <Table id={"id"} striped bordered hover responsive="xl" style={{ display: "block" }}>
          <thead>
            <tr>
              <th>#</th>
              {columnHeader.map(v => <th key={v}>{v}</th>)}
            </tr>
          </thead>
          <tbody>
            {tableList.map((v: any, index) => {
              return (<tr key={v.locationid}>
                <td>{index}</td>
                {columnHeader.map(header => <td>{v[header]}</td>)}

              </tr>)
            })}


          </tbody>
        </Table> : <div>Loading</div>
      }

    </main>
  );
}
