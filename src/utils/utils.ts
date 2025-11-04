import os from "os";

export function capitalizeFirstLetter(str: string) {
  if (typeof str !== "string" || str.length === 0) {
    return str; // Handle non-string or empty input
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const getBaseDomainIpAddress = () => {
  const interfaces = os.networkInterfaces();

  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  console.log("domain is locahost");
  return "localhost";
};

const getIpAddress = getBaseDomainIpAddress();

export const domain = ` http://${getIpAddress}:5000`;
