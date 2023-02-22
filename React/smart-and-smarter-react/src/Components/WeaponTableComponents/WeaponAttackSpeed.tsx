

type Props = {
    attack1Speed: number,
    attack2Speed?: number,
    attack3Speed?: number,
    attack4Speed?: number,
    attack5Speed?: number
}

export default function WeaponAttackSpeed(props: Props) {
    var str: string = "" + props.attack1Speed + "s";

    if(props.attack2Speed != null) str += "/" + props.attack2Speed + "s";
    if(props.attack3Speed != null) str += "/" + props.attack3Speed + "s";
    if(props.attack4Speed != null) str += "/" + props.attack4Speed + "s";
    if(props.attack5Speed != null) str += "/" + props.attack5Speed + "s";

    //return topStr garunteed, bottomStr only if specified. Solves problem of staff vs longsword mis match
    return (
        <>
            {str}
        </>
    )
}