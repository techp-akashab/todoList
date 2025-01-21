import CreateElement from "../createElement";
import "./about.css";

export default function About() {
  const divContainer = document.getElementById("root");
  divContainer.innerHTML = "";

  const aboutHead = CreateElement("h2", { id: "abouthead" }, ["About Us"]);
  const aboutDescription = CreateElement("p", { id: "aboutDescription" }, [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eveniet quos aut repellat sit vero ipsam, corrupti facere expedita, distinctio eaque ipsa delectus quibusdam officiis accusamus earum explicabo sint pariatur cumque soluta vitae architecto. Natus rem, alias amet, explicabo ea quaerat minima, fugiat illo vel corrupti doloremque cupiditate adipisci voluptatem.",
  ]);

  const aboutDiv = CreateElement("div", { id: "aboutDiv" }, [
    aboutHead,
    aboutDescription,
  ]);
  divContainer.append(aboutDiv);
}
