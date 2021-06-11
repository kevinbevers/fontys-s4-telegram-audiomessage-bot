export default function StepBanner({stepNumber = 1, stepText = "Text to convert"}) {
    return (
        <div className="redbg m-8">
          <div className="flex"><h2 className="redTitle my-auto">{stepNumber}</h2> <h2 className="redTitle my-auto">{stepText}</h2></div>
        </div>
    )
  }