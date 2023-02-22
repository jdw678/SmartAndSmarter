

type Props = {
    damageMin: number,
    damageMax: number,
    color: string
}

export default function WeaponDamage(props: Props) {

    var damageStr = "" + props.damageMin;
    if (props.damageMax != props.damageMin) damageStr += " ~ " + props.damageMax;

  return (
    <>
        <span style={{color: props.color}}>{damageStr}</span>
        <br />
    </>
  )
}