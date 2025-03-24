import React, { useState, useEffect } from "react";
import "./onboard.css";
import { Link } from "react-router-dom";
import OnboardTableRow from "../onboardTableRow/onboardTableRow";
import { toast } from "react-toastify";

export default function onboard() {
  const [candidateAPIdata, setcandidateAPIdata] = useState({});
  const [employees, setemployees] = useState([]);

  const candidatefromAPI = {
    employees: [
      {
        _id: "i43947ruw3r874734",
        employeeCode: "STA0001",
        firstName: "John mark king",
        lastName: "Doe",
        department: "Engineering",
        designation: "Senior Executive",
        rollBand: "B2",
        gender: "Male",
        dob: "1990-05-15",
        joiningDate: "2023-06-01",
        personalNumber: "9876543210",
        emergencyContactNumber: "9876543200",
        personalEmail: "john.doe@gmail.com",
        companyEmail: "john.doe@company.com",
        aadharNumber: "1234-5678-9012",
        panNumber: "ABCDE1234F",
        currentAddress: "123, ABC Street, City, State - 123456",
        permanentAddress: "456, XYZ Street, City, State - 654321",
        highestQualification: "M.Tech in Computer Science",
        previousEmployer: "XYZ Tech kamalgcfhf Pvt Ltd",
        totalExperience: "7 Years",
        relevantExperience: "5 Years",
        maritalStatus: "Married",
        status: "Active",
        salaryPackage: "12 LPA",
        basicSalary: "4,00,000",
        hra: "2,00,000",
        conveyanceAllowance: "50,000",
        medicalAllowance: "20,000",
        taxDeductions: "30,000",
        pfDeductions: "60,000",
        esiDeductions: "10,000",
        grossSalary: "10,00,000",
        netSalary: "9,00,000",
        uanNumber: "100123456789",
        pfNumber: "PF123456789",
        asset: "Y",
        assetType: "Laptop",
        laptopCompany: "Dell",
        assetId: "LAP12345",
        educationDocument: "",
        bankName: "State Bank of India",
        bankAccountNumber: "12345456789012",
        ifscCode: "SBIN0012345",
      },
      {
        _id: "kbdifu87w47u38",
        employeeCode: "STA0001",
        firstName: "John mark king",
        lastName: "Doe",
        department: "Engineering",
        designation: "Senior Executive",
        rollBand: "B2",
        gender: "Male",
        dob: "1990-05-15",
        joiningDate: "2023-06-01",
        personalNumber: "9876543210",
        emergencyContactNumber: "9876543200",
        personalEmail: "john.doe@gmail.com",
        companyEmail: "john.doe@company.com",
        aadharNumber: "1234-5678-9012",
        panNumber: "ABCDE1234F",
        currentAddress: "123, ABC Street, City, State - 123456",
        permanentAddress: "456, XYZ Street, City, State - 654321",
        highestQualification: "M.Tech in Computer Science",
        previousEmployer: "XYZ Tech kamalgcfhf Pvt Ltd",
        totalExperience: "7 Years",
        relevantExperience: "5 Years",
        maritalStatus: "Married",
        status: "Active",
        salaryPackage: "12 LPA",
        basicSalary: "4,00,000",
        hra: "2,00,000",
        conveyanceAllowance: "50,000",
        medicalAllowance: "20,000",
        taxDeductions: "30,000",
        pfDeductions: "60,000",
        esiDeductions: "10,000",
        grossSalary: "10,00,000",
        netSalary: "9,00,000",
        uanNumber: "100123456789",
        pfNumber: "PF123456789",
        asset: "Y",
        assetType: "Laptop",
        laptopCompany: "Dell",
        assetId: "LAP12345",
        educationDocument: "",
        bankName: "State Bank of India",
        bankAccountNumber: "12345456789012",
        ifscCode: "SBIN0012345",
      },
    ],
  };

  function handleDeleteCandidate(candidateId) {
    const okDel = window.confirm(
      `Do You Really Want to Delete the candidate ${candidateId}`
    );

    if (okDel) {
      setemployees((prev) => {
        return prev.filter((ele) => {
          return ele._id !== candidateId;
        });
      });

      toast.success("Deleted Successfully!");
    }
  }

  useEffect(() => {
    setcandidateAPIdata(candidatefromAPI);
  }, []);

  useEffect(() => {
    if (Object.keys(candidateAPIdata).length > 0) {
      setemployees(candidateAPIdata.employees);
    }
  }, [candidateAPIdata]);

  return (
    <div className="onboard">
      <h2>Onboarding</h2>
      <div className="onboarding-head">
        <h3>Candidate Details</h3>
        <div className="onboarding-header-right">
          <Link to={`/add-new-candidate`}>
            <div className="add-candidate-bts">Add Candidate</div>
          </Link>

          <svg
            className="filter-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
          </svg>
        </div>
      </div>

      <nav className="candidate-data">
        <table className="candidate-table">
          <thead>
            <tr>
              <th id="width-edit">
                <svg
                  className="list-ul-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                </svg>
              </th>
              <th id="width-num">#</th>
              <th id="width-emp-code">Employee Code</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Desigination</th>
              <th>Roll Band</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Joining Date</th>
              <th id="width-con-num">Personal Number</th>
              <th id="width-eme-num">Emergancy Contact Number</th>
              <th id="width-personal-mail">Personal Email Id</th>
              <th id="width-company-mail">Company Email Id</th>
              <th id="width-aathar">Aadhar Number</th>
              <th id="width-pan">PAN Number</th>
              <th id="width-address">Current Address</th>
              <th id="width-address">Permanent Address</th>
              <th id="width-qualification">Highest Qualification</th>
              <th id="width-pre-employee">Previous Employer</th>
              <th id="width-experience">Total Experience </th>
              <th id="width-relative-experience">Relevant Experience</th>
              <th>Marital Status</th>
              <th>Status</th>
              <th>Package</th>
              <th>Basics</th>
              <th>HRA</th>
              <th id="conveyance">Conveyance Allowance</th>
              <th id="medical">Medical Allowance</th>
              <th>Deductions</th>
              <th>Gross Salary</th>
              <th>Net Salary</th>
              <th>UAN Number</th>
              <th>PF Number</th>
              <th>Asset</th>
              <th>Asset Type</th>
              <th id="width-lap-cmy">Laptop Company Name</th>
              <th>Asset Id</th>
              <th id="width-edu-doc">Education Documents</th>
              <th>Bank Name</th>
              <th>Bank A/c No</th>
              <th>IFSC Code</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((ele, ind) => (
              <OnboardTableRow
                ele={ele}
                ind={ind}
                key={ind}
                handleDeleteCandidate={handleDeleteCandidate}
              />
            ))}
          </tbody>
        </table>
      </nav>
    </div>
  );
}
