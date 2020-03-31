import { AllHtmlEntities } from 'html-entities';

export const autheticateUserAction = (userName: string, password: string) =>{
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.open('POST', 'https://test.digiflow.dk/api.asmx', true);

  // build SOAP request
  let request = `<?xml version="1.0" encoding="utf-8"?>
                  <soap:Envelope 
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                      <soap:Body>
                        <Authenticate xmlns="http://tempuri.org/">
                          <RequestToken>32e7e4f0-f949-4a43-b123-6699e8fd49ce</RequestToken>
                          <Username> ${userName} </Username> 
                        <Password> ${password} </Password>
                      </Authenticate>
                    </soap:Body>
                  </soap:Envelope>`;
  
  xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
              const startIdx = xmlhttp.responseText.indexOf('<AuthenticateResult>') + 'AuthenticateResult'.length + 2;
              const endIdx = xmlhttp.responseText.indexOf('</AuthenticateResult>');
              const payload = xmlhttp.responseText.substr(startIdx, endIdx - startIdx);
              const entities = new AllHtmlEntities();
              const jsonString = entities.decode(payload);
              logInCB(JSON.parse(jsonString));
          }
      }
  };

  // Send the POST request
  xmlhttp.setRequestHeader('Content-Type', 'text/xml');
  xmlhttp.send(request);
  
}