import Html5QrcodePlugin from "./Html5QrcodePlugin";

function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(`Scan result = ${decodedText}`, decodedResult);
    alert(`Scan result = ${decodedText}`);
  };

  return (
    <div className="App">
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
}

export default App;
