import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function onboardTableRow({ ele, ind, handleDeleteCandidate }) {
  const navigate = useNavigate();

  return (
    <tr className="table-row">
      <td className="option-td" id="width-edit">
        <svg
          className="dot-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
        </svg>

        <div className="options">
          <p
            onClick={() => {
              navigate(`/edit-candidate/${ele._id}`);
            }}
          >
            Edit
          </p>
          <p
            onClick={() => {
              handleDeleteCandidate(ele._id);
            }}
          >
            Delete
          </p>
        </div>
      </td>
      <td id="width-num">{ind + 1}</td>
      <td id="width-emp-code">{ele.employeeCode}</td>
      <td>
        <abbr title={ele.firstName}>
          {ele.firstName.length < 14
            ? ele.firstName
            : ele.firstName.slice(0, 11) + "..."}
        </abbr>
      </td>
      <td>
        <abbr title={ele.lastName}>
          {ele.lastName.length < 14
            ? ele.lastName
            : ele.lastName.slice(0, 11) + "..."}
        </abbr>
      </td>
      <td>{ele.department}</td>
      <td>
        <abbr title={ele.designation}>
          {ele.designation.length < 15
            ? ele.designation
            : ele.designation.slice(0, 12) + "..."}
        </abbr>
      </td>
      <td>{ele.rollBand}</td>
      <td>{ele.gender}</td>
      <td>{ele.dob}</td>
      <td>{ele.joiningDate}</td>
      <td id="width-con-num">
        <abbr title={ele.personalNumber}>
          {ele.personalNumber.length < 17
            ? ele.personalNumber
            : ele.personalNumber.slice(0, 14) + "..."}
        </abbr>
      </td>
      <td id="width-eme-num">
        <abbr title={ele.emergencyContactNumber}>
          {ele.emergencyContactNumber.length < 17
            ? ele.emergencyContactNumber
            : ele.emergencyContactNumber.slice(0, 14) + "..."}
        </abbr>
      </td>
      <td id="width-personal-mail">
        <abbr title={ele.personalEmail}>
          {ele.personalEmail.length < 14
            ? ele.personalEmail
            : ele.personalEmail.slice(0, 11) + "..."}
        </abbr>
      </td>
      <td id="width-company-mail">
        <abbr title={ele.companyEmail}>
          {ele.companyEmail.length < 14
            ? ele.companyEmail
            : ele.companyEmail.slice(0, 11) + "..."}
        </abbr>
      </td>
      <td id="width-aathar">
        <abbr title={ele.aadharNumber}>
          {ele.aadharNumber.length < 15
            ? ele.aadharNumber
            : ele.aadharNumber.slice(0, 11) + "..."}
        </abbr>
      </td>
      <td id="width-pan">
        <abbr title={ele.panNumber}>
          {ele.panNumber.length < 14
            ? ele.panNumber
            : ele.panNumber.slice(0, 11) + "..."}
        </abbr>
      </td>
      <td id="width-address">
        <abbr title={ele.currentAddress}>
          {ele.currentAddress.length < 34
            ? ele.currentAddress
            : ele.currentAddress.slice(0, 29) + "..."}
        </abbr>
      </td>
      <td id="width-address">
        <abbr title={ele.currentAddress}>
          {ele.currentAddress.length < 34
            ? ele.currentAddress
            : ele.currentAddress.slice(0, 29) + "..."}
        </abbr>
      </td>
      <td id="width-qualification">
        <abbr title={ele.highestQualification}>
          {ele.highestQualification.length < 18
            ? ele.highestQualification
            : ele.highestQualification.slice(0, 15) + "..."}
        </abbr>
      </td>
      <td id="width-pre-employee">
        <abbr title={ele.previousEmployer}>
          {ele.previousEmployer.length < 18
            ? ele.previousEmployer
            : ele.previousEmployer.slice(0, 15) + "..."}
        </abbr>
      </td>
      <td id="width-experience">
        <abbr title={ele.totalExperience}>
          {ele.totalExperience.length < 18
            ? ele.totalExperience
            : ele.totalExperience.slice(0, 15) + "..."}
        </abbr>
      </td>
      <td id="width-relative-experience">
        <abbr title={ele.relevantExperience}>
          {ele.relevantExperience.length < 18
            ? ele.relevantExperience
            : ele.relevantExperience.slice(0, 15) + "..."}
        </abbr>
      </td>
      <td>{ele.maritalStatus}</td>
      <td>{ele.status}</td>
      <td>{ele.salaryPackage}</td>
      <td>{ele.basicSalary}</td>
      <td>{ele.hra}</td>
      <td id="conveyance">{ele.conveyanceAllowance}</td>
      <td id="medical">{ele.medicalAllowance}</td>
      <td>{ele.taxDeductions}</td>
      <td>{ele.grossSalary}</td>
      <td>{ele.netSalary}</td>
      <td>
        <abbr title={ele.uanNumber}>
          {ele.uanNumber.length < 14
            ? ele.uanNumber
            : ele.uanNumber.slice(0, 12) + "..."}
        </abbr>
      </td>
      <td>
        <abbr title={ele.pfNumber}>
          {ele.pfNumber.length < 15
            ? ele.pfNumber
            : ele.pfNumber.slice(0, 13) + "..."}
        </abbr>
      </td>
      <td>{ele.asset}</td>
      <td>
        <abbr title={ele.assetType}>
          {ele.assetType.length < 14
            ? ele.assetType
            : ele.assetType.slice(0, 12) + "..."}
        </abbr>
      </td>
      <td id="width-lap-cmy">{ele.laptopCompany}</td>
      <td>
        <abbr title={ele.assetId}>
          {ele.assetId.length < 14
            ? ele.assetId
            : ele.assetId.slice(0, 12) + "..."}
        </abbr>
      </td>
      <td id="width-edu-doc">
        {ele.educationDocument !== "" ? "Attached" : "Not attached"}
      </td>
      <td>
        <abbr title={ele.bankName}>
          {ele.bankName.length < 14
            ? ele.bankName
            : ele.bankName.slice(0, 12) + "..."}
        </abbr>
      </td>
      <td>
        <abbr title={ele.bankAccountNumber}>
          {ele.bankAccountNumber.length < 14
            ? ele.bankAccountNumber
            : ele.bankAccountNumber.slice(0, 12) + "..."}
        </abbr>
      </td>
      <td>
        <abbr title={ele.ifscCode}>
          {ele.ifscCode.length < 14
            ? ele.ifscCode
            : ele.ifscCode.slice(0, 12) + "..."}
        </abbr>
      </td>
    </tr>
  );
}
