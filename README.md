# Pivoting, port forwarding and tunneling security laboratory.

Security lab showing the use of a compromised host to pivot into internal networks. It has been developed as the final exam project for the Network Security course.
**The goal is to access all the services that run on the internal network hosts!** A full walkthrough can be found \<here\>. It will demonstrate how to perform pivoting, port forwarding, and tunneling using different techniques and tools, while also explaining the theoretical basics behind them.
## Lab overview
![lab_overview](https://github.com/cxnturi0n/pivoting-tunneling-lab/assets/75443422/f3cccc7c-573c-440a-9537-5697dc2b0f85)
## Play
You can either access the laboratory on [DockerSecurityPlayground](https://github.com/DockerSecurityPlayground/DSP) (DSP) by starting the 'NS_Pivoting_PortForwarding_Tunneling' lab or playing it directly from your Windows/Linux/MacOS host by following these simple steps:
1. Clone or download this repo.
2. Go inside the [Lab](https://github.com/cxnturi0n/pivoting-tunneling-lab/tree/main/Lab) folder.
3. Run the containers: ```docker compose up -d```. This may take some minutes.
4. Connect to the kali container with a vnc client at localhost:5900, specyifing 'password' as the password.


