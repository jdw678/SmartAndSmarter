import React from 'react'

type Props = {
    text?: string
}

//slow down on hit cell
export default function SDOHCell(props: Props) {

    if(props.text == undefined)
        return(<></>)

    var combos = props.text.split("\n\n");
  return (
    <>
        {combos.map((comboStr: string) =>
        {
            return(
                <>
                {
                    comboStr.split("\n").map((str: string) =>
                    {
                        return(
                            <>
                                {str}<br />
                            </>
                        )
                    })
                }
                <br />
                </>
            )
        })}
    </>
  )
}