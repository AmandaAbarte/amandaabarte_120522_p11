import React from "react";
import Dropdown from "./Dropdown";

export default function About() {
  const [dropdown, setDropdown] = React.useState([
    {
      title: "Reliability",
      descriprion:
        "The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.",
      isActive: true,
    },
    {
      title: "Respect",
      descriprion:
        "Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.",
      isActive: false,
    },
    {
      title: "Service",
      descriprion:
        "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions",
      isActive: false,
    },
    {
      title: "Safety",
      descriprion:
        "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests.",
      isActive: false,
    },
  ]);

  function handleDropdown(title) {
    setDropdown((prevDropdown) => {
      return prevDropdown.map((drop) => {
        return drop.title === title
          ? { ...drop, isActive: !drop.isActive }
          : drop;
      });
    });
  }
  const allitems = dropdown.map(item => (
      <Dropdown 
      key={item.title}
      isActive={item.isActive}
      toggle={() => handleDropdown(item.title)}
      title={item.title}
      descriprion={item.descriprion}/>
  ))
  return <div className="about">{allitems}</div>;
}
