//Load openDSU enviroment
require("../privatesky/psknode/bundles/testsRuntime");
require("../privatesky/psknode/bundles/openDSU");

//Load openDSU SDK
const opendsu = require("opendsu");

//Load resolver library
const resolver = opendsu.loadApi("resolver");

//Load keyssi library
const keyssispace = opendsu.loadApi("keyssi");

const crypto = opendsu.loadApi("crypto");



//Create a DID Document using a SeedSSI
createKeyDid('default', (err, did, seedSSI)=> {

    //Sign a message with SeedSSI private key
    signWithSeedSSI(seedSSI,"hello", (err, hash, signature)=>{
    
       //Resolve DID Document with sReadSSI and return the public Key 
        resolveKeyDid(did, (err, publicKey )=> {   
            
            //Verify the signature using DID document's public key
            verifySignatureWithDidPublicKey(did,hash, signature, publicKey, (err, status)=>{
                console.log("Signature was verified:",status);
            })           
            
        })
                          
    })

})



function createKeyDid(domain, callback){

    var seedSSI = keyssispace.buildSeedSSI(domain);
    var didSSI;
    seedSSI.initialize(domain, undefined, undefined, "v0", "hint",   (err) => {});
    var readSSI=seedSSI.derive();
    resolver.createDSU(seedSSI, (err, dsuInstance) =>{
        var did="did:opendsu:"+seedSSI.getIdentifier();
        var didDocument= {
          "@context": "https://www.w3.org/ns/did/v1",
          "id": did,
          "authentication": [{

            "id": did+"#keys-1",
            "type": "Ed25519VerificationKey2018",
            "controller": did,
            "publicKeyBase58": seedSSI.getPublicKey()
          }]
        };
        dsuInstance.writeFile('/did', JSON.stringify(didDocument), (err) => {
             dsuInstance.getKeySSI('sread',(err, keyidentifier) => {
                callback(err, keyidentifier, seedSSI);
            });
        });
    });

    
}


function resolveKeyDid(keydid, callback){
    resolver.loadDSU(keydid, (err, dsuInstance) =>{
        dsuInstance.readFile('/did', (err, data) => {

            const dataObject = JSON.parse(data.toString());
            console.log("Resolve did with sread:",dataObject);

            var publicKey=dataObject.authentication[0].publicKeyBase58;

            callback(err, publicKey);             
           
        });
    });
}



function signWithSeedSSI(seedSSI, message, callback){
    crypto.hash(seedSSI, message, (err, hash) => {
            crypto.sign(seedSSI, hash, (err, signature) => {
                callback(err, hash, signature);
            });
        });
}

function verifySignatureWithDidPublicKey(keydid, hash, signature, didPublicKey, callback){
  
    crypto.verifySignature(keydid, hash, signature, didPublicKey, (err, status)=>{
        callback(err,status);
    })

}


