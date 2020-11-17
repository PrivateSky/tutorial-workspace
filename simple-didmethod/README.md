

## Installation

Follow installation instruction of README in tutorial-workspace folder


## Simple-didmethod


This tutorial sub project helps you understand how you can work directly with DSUs. 

The code for this tutorial is in [helloworld-dsu] folder. It consist of only one file _main.js_

To **FIRST** run it simply **run the steps** found in the [Installation] section above then: 


```sh
# Step 1: Go inside [helloworld-dsu]
cd helloworld-dsu

# Step 2: Run the app
node main.js
```

You should get something like: 

```
....
resolve did with sread: {
  '@context': 'https://www.w3.org/ns/did/v1',
  id: 'did:opendsu:65FmT6jYpmQXgvgJoccUMxTdUA31WBkXh19ZQbdU6bdFANgeQSoGYHDtg3rzxkNvKN63N3Lz3Ha2k5HZAkTuAP1H6WVdMuoR',
  authentication: [
    {
      id: 'did:opendsu:65FmT6jYpmQXgvgJoccUMxTdUA31WBkXh19ZQbdU6bdFANgeQSoGYHDtg3rzxkNvKN63N3Lz3Ha2k5HZAkTuAP1H6WVdMuoR#keys-1',
      type: 'Ed25519VerificationKey2018',
      controller: 'did:opendsu:65FmT6jYpmQXgvgJoccUMxTdUA31WBkXh19ZQbdU6bdFANgeQSoGYHDtg3rzxkNvKN63N3Lz3Ha2k5HZAkTuAP1H6WVdMuoR',
      publicKeyBase58: '-----BEGIN PUBLIC KEY-----\n' +
        'MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEbX3vxBl3nHcFk3zCfV/Vom5dqbSfUb0+\n' +
        'pIgVoAWfEu+RHbKkko6/acbf7BPt5EL98Kb5LwswzMKRKPEfFPYOow==\n' +
        '-----END PUBLIC KEY-----'
    }
  ]
}
status of signature verification true
....
```


