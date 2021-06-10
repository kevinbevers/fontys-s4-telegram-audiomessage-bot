export default function Step4() {
    return (
      <>
        <div className="content">
        <h1>Text to speech</h1>
        <div className="redbg">
          <h2>4</h2>
        </div>
  
  
    <form action="http://localhost:4001/voicefile" method="get" target="_blank">
      <textarea id="text" name="tss" rows="4" cols="50" placeholder="Text to be converted." />
        <br/><br/><br/>
        <input type="button" value="Select your voice" />
        </form>
        </div>
      </>
    )
  }