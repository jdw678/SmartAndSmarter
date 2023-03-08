
type Props = {
    barbarianCanUse?: boolean,
    rogueCanUse?: boolean,
    fighterCanUse?: boolean,
    wizardCanUse?: boolean,
    clericCanUse?: boolean,
    rangerCanUse?: boolean,
}



export default function ClassesCell(props: Props) {
    function BuildStrings()
    {
        var strings: string[] = [];

        if(props.barbarianCanUse) strings.push("Barbarian")
        if(props.clericCanUse) strings.push("Cleric");
        if(props.fighterCanUse) strings.push("Fighter");
        if(props.rangerCanUse) strings.push("Ranger");
        if(props.rogueCanUse) strings.push("Rogue");
        if(props.wizardCanUse) strings.push("Wizard");

        return strings;
    }

    const strings = BuildStrings();

  return (
    <>
        <a href={"https://darkanddarker.wiki.spellsandguns.com/" + strings[0]} title={strings[0]}>{strings [0]}</a>
        {
            strings.map((str, index) => {
                if(index !== 0)
                    return(
                    <>
                        , <a href={"https://darkanddarker.wiki.spellsandguns.com/" + str} title={str}>{str}</a>
                    </>
                    )
            })
        }
    </>
  )
}