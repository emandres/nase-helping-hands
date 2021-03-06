import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import PopoutLink from './components/PopoutLink'
const { Text, Title } = Typography

export default function CrewLeaderChecklist() {
  const links = {
    chainsaw: 'https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng',
    crisisCleanup: 'https://crisiscleanup.org',
    crisisCleanupTraining: 'https://www.youtube.com/watch?v=ot4LZjtK0xo'
  }

  return <>
    <Title level={2}>Crew Leader Checklist</Title>

    <Title level={3}>Training</Title>
    <ul>
      <li>Review the <Link to="training">Training Materials</Link> and complete any necessary training required for the work you will be doing.</li>
      <li>All crew members accepting work orders where tree work will be done must complete the <PopoutLink href={links.chainsaw}>mandatory online chainsaw instruction</PopoutLink> or show a certificate.</li>
      <li>
        Every crew should have at least one person <PopoutLink href={links.crisisCleanupTraining}>trained</PopoutLink> to enter, view,
        and close work orders in <PopoutLink href={links.crisisCleanup}>Crisis Cleanup.</PopoutLink>&nbsp;
        <Text type="danger">Do not log in and claim your own work orders.</Text>
      </li>
    </ul>

    <Title level={3}>Check-In</Title>
    <p>When arriving at the command center, team captains check in and:</p>
    <ul>
      <li>Fill out crew registration form</li>
      <li>Obtain placards paper to put in dash of each vehicle if needed</li>
      <li>Pick up work order and blank work order forms</li>
      <li>Receive mandatory training at the Command Center in Slidell, Louisiana</li>
      <li>Meanwhile, your remaining crew members will gather T-shirts and supplies (including water to leave with those you help).</li>
      <li>
        Ideally, every crew should have at least one person trained to enter, view, and close work orders in <a href="https://crisiscleanup.org">Crisis Cleanup</a>.
        Additionally, all crew members accepting work orders where tree work will be done must complete the&nbsp;
        <a href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng">mandatory online chainsaw instruction</a> or show a certificate.
        The command center will be the one who assigns you work orders.&nbsp;
      </li>
      <li><a href="https://www.youtube.com/watch?v=ot4LZjtK0xo">Crisis Cleanup Basic Training</a></li>
    </ul>
  </>

}