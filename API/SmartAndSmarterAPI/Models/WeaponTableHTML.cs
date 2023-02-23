using HtmlAgilityPack;
using System.Net;
using System;
using System.Collections.Generic;
using System.Text.Json;

namespace SmartAndSmaterAPI.Models
{
    public static class WeaponTableHTML
    {
        static string folder = "G:\\Programming\\Projects\\SmartAndSmarter\\API\\SmartAndSmarterAPI\\TestHTML\\";

        public static async Task<List<Weapon>> ParseTable()
        {
            string htmlLink = "https://darkanddarker.wiki.spellsandguns.com/Weapons";
            HttpClient client = new HttpClient();
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls13;
            client.DefaultRequestHeaders.Accept.Clear();
            var response = client.GetStringAsync(htmlLink);
            string html = await response;


            HtmlDocument doc = new HtmlDocument();
            doc.LoadHtml(html);
            doc.OptionEmptyCollection = true;

            File.Delete($"{folder}WeaponOBJS.txt");

            string wikiUrl = "https://darkanddarker.wiki.spellsandguns.com";

            List<Weapon> weapons = new List<Weapon>();

            foreach (HtmlNode table in doc.DocumentNode.SelectNodes("//table/tbody").ToList())
            {
                File.WriteAllText(folder + "HTML", table.InnerHtml);

                foreach (HtmlNode row in table.SelectNodes("tr"))
                {

                    //skip header
                    if (row.SelectNodes("td").Count == 0) continue;
                    Weapon weapon = new Weapon();
                    HtmlNodeCollection cells = row.SelectNodes("td");

                    #region CellSetup
                    //cells that exist on every table
                    HtmlNode name = cells[0];
                    HtmlNode classes = cells[1];
                    HtmlNode slot = cells[2];

                    //various cells that may or may not exist
                    HtmlNode damage = null;
                    HtmlNode movementSpeed = null;
                    HtmlNode combo = null;
                    HtmlNode attackSpeed = null;
                    HtmlNode reach = null;
                    HtmlNode actionMovementSpeed = null;
                    HtmlNode unique = null;
                    HtmlNode clipSize = null;
                    HtmlNode reloadSpeed = null;
                    HtmlNode sweetSpot = null;

                    //only used in magic table
                    HtmlNode magicDamage = null;

                    //determine what cells should exist
                    //magic table
                    if (cells.Count == 12)
                    {
                        weapon.ClipSize = null;
                        weapon.ReloadSpeed = null;

                        damage = cells[3];
                        magicDamage = cells[4];
                        movementSpeed = cells[5];
                        combo = cells[6];
                        attackSpeed = cells[7];
                        sweetSpot = cells[8];
                        reach = cells[9];
                        actionMovementSpeed = cells[10];
                        unique = cells[11];
                    }
                    //sword table
                    else if (cells.Count == 11)
                    {
                        weapon.ClipSize = null;
                        weapon.ReloadSpeed = null;

                        damage = cells[3];
                        movementSpeed = cells[4];
                        combo = cells[5];
                        attackSpeed = cells[6];
                        sweetSpot = cells[7];
                        reach = cells[8];
                        actionMovementSpeed = cells[9];
                        unique = cells[10];
                    }
                    //bow table
                    else if(cells.Count == 10)
                    {
                        weapon.Attack1Type = WeaponAttackType.Bow;
                        weapon.Attack1DamageMultiplier = 100;
                        weapon.SweetSpot = null;
                        weapon.Reach = null;

                        damage = cells[3];
                        movementSpeed = cells[4];
                        attackSpeed = cells[5];
                        reloadSpeed = cells[6];
                        actionMovementSpeed = cells[7];
                        clipSize = cells[8];
                        unique = cells[9];
                    }
                    //sheild table
                    else if(cells.Count == 9)
                    {
                        weapon.Attack1DamageMultiplier = 100;
                        weapon.Attack1Speed = 0;
                        weapon.SweetSpot = null;
                        weapon.ClipSize = null;
                        weapon.ReloadSpeed = null;
                        weapon.Reach = null;

                        //armor rating acts the same, stored in damage for berevity
                        damage = cells[3];
                        movementSpeed = cells[4];
                        combo = cells[5];
                        reach = cells[6];
                        actionMovementSpeed= cells[7];
                        unique = cells[8];
                    }
                    //crossbow table
                    else if(cells.Count == 8)
                    {

                        weapon.Attack1Type = WeaponAttackType.Bow;
                        weapon.Attack1DamageMultiplier = 100;
                        weapon.SweetSpot = null;
                        weapon.ClipSize = null;
                        weapon.ReloadSpeed = null;
                        weapon.Reach = null;

                        damage = cells[3];
                        movementSpeed = cells[4];
                        reloadSpeed = cells[5];
                        actionMovementSpeed = cells[6];
                        unique = cells[7];

                    }
                    #endregion

                    //name cell of the table, innerText is name and has <img> tag with the image
                    weapon.Name = name.InnerText.Trim().TrimEnd();
                    weapon.ImageLocation = wikiUrl + name.Descendants("img").First().GetAttributeValue("src", "");



                    //class cell of the table, can have multiple classes, all wrapped in individual <a> tags
                    classes.SelectNodes("a").ToList().ForEach(a =>
                    {
                        if (a.InnerText.Contains("Fighter")) weapon.FighterCanUse = true;
                        if (a.InnerText.Contains("Barbarian")) weapon.FighterCanUse = true;
                        if (a.InnerText.Contains("Cleric")) weapon.FighterCanUse = true;
                        if (a.InnerText.Contains("Wizard")) weapon.FighterCanUse = true;
                        if (a.InnerText.Contains("Rogue")) weapon.FighterCanUse = true;
                        if (a.InnerText.Contains("Ranger")) weapon.FighterCanUse = true;
                    });

                    //slot cell of the table
                    if (slot.InnerText.Contains("Main")) weapon.Hand = "Main";
                    if (slot.InnerText.Contains("Off")) weapon.Hand = "Off";
                    if (slot.InnerText.Contains("Handed")) weapon.Hand = "Both";


                    #region damage
                    if (damage != null)
                    {

                        //damge cell of the table, each damage is within a span in the format of "minDam ~ maxDam", may have either 1 or 2 damages
                        HtmlNodeCollection damageStrings = damage.SelectNodes("span");

                        //only true for magic table
                        if (damageStrings.Count == 0 && magicDamage != null) damageStrings = magicDamage.SelectNodes("span");


                        //extract the damage numbers out of the string passed of format "number1 ~ number2"
                        float[] ParseWeaponDamage(string innerText)
                        {
                            //true if there are 2 damages
                            if (innerText.Contains("~"))
                            {
                                //parse string into 2 strings, each being a damage number to be returned
                                string[] damageStrings = innerText.Split(" ~ ");

                                //return float array of the 2 damage strings parsed to float
                                return new float[] { float.Parse(damageStrings[0]), float.Parse(damageStrings[1]) };
                            }
                            //true if there is only 1 damage
                            else
                            {
                                return new float[] { float.Parse(innerText) };
                            }
                        }

                        //make sure there is some data
                        if (damageStrings.Count > 0)
                        {

                            //black damage
                            //parse damage into float array of either length 1 or length 2
                            float[] damages = ParseWeaponDamage(damageStrings[0].InnerText);


                            //minDam will always be the first float in damages
                            weapon.BlackDamageMin = damages[0];


                            //if length 1, set weapon.maxDam to the number
                            if (damages.Length == 1)
                                weapon.BlackDamageMax = damages[0];

                            //if length 2, set weapon.maxDam to [1]
                            else
                            {
                                weapon.BlackDamageMax = damages[1];
                            }



                            //grey damage
                            damages = ParseWeaponDamage(damageStrings[1].InnerText);
                            weapon.GreyDamageMin = damages[0];

                            if (damages.Length == 1)
                                weapon.GreyDamageMax = damages[0];

                            else
                                weapon.GreyDamageMax = damages[1];



                            //white damage
                            damages = ParseWeaponDamage(damageStrings[2].InnerText);
                            weapon.WhiteDamageMin = damages[0];



                            if (damages.Length == 1)
                                weapon.WhiteDamageMax = damages[0];

                            else
                                weapon.WhiteDamageMax = damages[1];



                            //green damage
                            damages = ParseWeaponDamage(damageStrings[3].InnerText);
                            weapon.GreenDamageMin = damages[0];

                            if (damages.Length == 1)
                                weapon.GreenDamageMax = damages[0];

                            else
                                weapon.GreenDamageMax = damages[1];



                            //blue damage
                            damages = ParseWeaponDamage(damageStrings[4].InnerText);
                            weapon.BlueDamageMin = damages[0];


                            if (damages.Length == 1)
                                weapon.BlueDamageMax = damages[0];

                            else
                                weapon.BlueDamageMax = damages[1];



                            //purple damage
                            damages = ParseWeaponDamage(damageStrings[5].InnerText);
                            weapon.PurpleDamageMin = damages[0];

                            if (damages.Length == 1)
                                weapon.PurpleDamageMax = damages[0];

                            else
                                weapon.PurpleDamageMax = damages[1];



                            //orange damage
                            damages = ParseWeaponDamage(damageStrings[6].InnerText);
                            weapon.OrangeDamageMin = damages[0];

                            if (damages.Length == 1)
                                weapon.OrangeDamageMax = damages[0];

                            else
                                weapon.OrangeDamageMax = damages[1];



                            //gold damage
                            damages = ParseWeaponDamage(damageStrings[7].InnerText);
                            weapon.GoldDamageMin = damages[0];

                            if (damages.Length == 1)
                                weapon.GoldDamageMax = damages[0];

                            else
                                weapon.GoldDamageMax = damages[1];
                        }

                    }
                    #endregion

                    #region combo
                    //combo cell

                    /*<td> Slash/Pierce/Slash <br> 100%/100%/100%<br> <br> Slash/Slash <br> 100%/100% </td>*/
                    /*<td> Blunt/Blunt <br> 100%/100%<br> <br> Spell Cast </td>*/
                    /*<td> Blunt/Blunt/Blunt <br> 100%/100%/100% </td>*/
                    //the inside of the td tag is what is passed in
                    //two br tags indicates a split between top / bottom
                    //one br tag indicates a split between attackType and attackDamageMultiplier
                    //attackDamageMultiplier is always below attackType (if it exists)
                    List<Tuple<string, float?>> ComboParse(string innerHtml)
                    {
                        List<Tuple<string, float?>> combos = new List<Tuple<string, float?>>();

                        //default to innerHtml, will be over wrote if there is a top and bottom type / ADM split (ex. first td in top comment vs last td in top comment)
                        string[] topAndBottomSplit = new string[] {innerHtml};

                        //there is a top attackType / ADM and a bottom type / ADM if this is true
                        if(innerHtml.Contains("<br> <br>"))
                        {
                            topAndBottomSplit = innerHtml.Split("<br> <br>");
                        }
                        else if (innerHtml.Contains("<br><br>"))
                        {
                            topAndBottomSplit = innerHtml.Split("<br><br>");
                        }



                        //each type / ADM section (max 2, 1 top 1 bottom)
                        foreach(string typeADM in topAndBottomSplit)
                        {
                            //default to typeADM, will be over wrote if there is both a type and an ADM, otherwise it will be only the type innerText (ADM may not exist)
                            string[] typeADMSplit = new string[] {typeADM};

                            //true if there is both a type and an ADM
                            if(typeADM.Contains("<br>"))
                            {
                                typeADMSplit = typeADM.Split("<br>");
                            }


                            //calculate all types
                            string[] types = typeADMSplit[0].Split("/");

                            //calculate all AMDs if they exist
                            if(typeADMSplit.Length > 1)
                            {
                                //calculate all the adms
                                string[] ADMs = typeADMSplit[1].Split("/");

                                //add all the combos
                                for(int i = 0; i < ADMs.Length; i++)
                                {

                                    string type = types[i].Trim().TrimEnd();
                                    combos.Add(new Tuple<string, float?>(type, float.Parse(ADMs[i].Replace("%", ""))));
                                }
                            }
                            //add all the combos with null floats
                            else
                            {
                                for (int i = 0; i < types.Length; i++)
                                    combos.Add(new Tuple<string, float?>(types[i].Trim().TrimEnd(), null));
                            }
                        }

                        return combos;
                    }


                    //use above method to calculate a list of tuples where the first item is the type and the second item is it's corresponding attackDamageMuiltiplier (if there is one)
                    //pass it all of the innerHtml of the td of the combo cell

                    if(combo != null)
                    {

                        List<Tuple<string, float?>> combos = ComboParse(combo.InnerHtml);
                        
                        if(combos.Count > 0)
                        {

                            if (combos[0].Item1.Contains(WeaponAttackType.Slash.ToString())) weapon.Attack1Type = WeaponAttackType.Slash;
                            if (combos[0].Item1.Contains(WeaponAttackType.Pierce.ToString())) weapon.Attack1Type = WeaponAttackType.Pierce;
                            if (combos[0].Item1.Contains(WeaponAttackType.Blunt.ToString())) weapon.Attack1Type = WeaponAttackType.Blunt;
                            if (combos[0].Item1.Contains(WeaponAttackType.Bow.ToString())) weapon.Attack1Type = WeaponAttackType.Bow;
                            if (combos[0].Item1.Contains(WeaponAttackType.Block.ToString())) weapon.Attack1Type = WeaponAttackType.Block;
                            if (combos[0].Item1.Contains(WeaponAttackType.GroundDeployment.ToString())) weapon.Attack1Type = WeaponAttackType.GroundDeployment;

                            //first weapon must have an attack damage multiplier
                            if (combos[0].Item2 != null)
                                weapon.Attack1DamageMultiplier = (float)combos[0].Item2;
                            else weapon.Attack1DamageMultiplier = 0;
                        }

                        if (combos.Count > 1)
                        {

                            if (combos[1].Item1.Contains(WeaponAttackType.Slash.ToString())) weapon.Attack2Type = WeaponAttackType.Slash;
                            if (combos[1].Item1.Contains(WeaponAttackType.Pierce.ToString())) weapon.Attack2Type = WeaponAttackType.Pierce;
                            if (combos[1].Item1.Contains(WeaponAttackType.Blunt.ToString())) weapon.Attack2Type = WeaponAttackType.Blunt;
                            if (combos[1].Item1.Contains(WeaponAttackType.Bow.ToString())) weapon.Attack2Type = WeaponAttackType.Bow;
                            if (combos[1].Item1.Contains(WeaponAttackType.Block.ToString())) weapon.Attack2Type = WeaponAttackType.Block;
                            if (combos[1].Item1.Contains(WeaponAttackType.GroundDeployment.ToString())) weapon.Attack2Type = WeaponAttackType.GroundDeployment;

                            weapon.Attack2DamageMultiplier = combos[1].Item2;
                        }

                        if (combos.Count > 2)
                        {

                            if (combos[2].Item1.Contains(WeaponAttackType.Slash.ToString())) weapon.Attack3Type = WeaponAttackType.Slash;
                            if (combos[2].Item1.Contains(WeaponAttackType.Pierce.ToString())) weapon.Attack3Type = WeaponAttackType.Pierce;
                            if (combos[2].Item1.Contains(WeaponAttackType.Blunt.ToString())) weapon.Attack3Type = WeaponAttackType.Blunt;
                            if (combos[2].Item1.Contains(WeaponAttackType.Bow.ToString())) weapon.Attack3Type = WeaponAttackType.Bow;
                            if (combos[2].Item1.Contains(WeaponAttackType.Block.ToString())) weapon.Attack3Type = WeaponAttackType.Block;
                            if (combos[2].Item1.Contains(WeaponAttackType.GroundDeployment.ToString())) weapon.Attack3Type = WeaponAttackType.GroundDeployment;

                            weapon.Attack3DamageMultiplier = combos[2].Item2;
                        }

                        if (combos.Count > 3)
                        {

                            if (combos[3].Item1.Contains(WeaponAttackType.Slash.ToString())) weapon.Attack4Type = WeaponAttackType.Slash;
                            if (combos[3].Item1.Contains(WeaponAttackType.Pierce.ToString())) weapon.Attack4Type = WeaponAttackType.Pierce;
                            if (combos[3].Item1.Contains(WeaponAttackType.Blunt.ToString())) weapon.Attack4Type = WeaponAttackType.Blunt;
                            if (combos[3].Item1.Contains(WeaponAttackType.Bow.ToString())) weapon.Attack4Type = WeaponAttackType.Bow;
                            if (combos[3].Item1.Contains(WeaponAttackType.Block.ToString())) weapon.Attack4Type = WeaponAttackType.Block;
                            if (combos[3].Item1.Contains(WeaponAttackType.GroundDeployment.ToString())) weapon.Attack4Type = WeaponAttackType.GroundDeployment;

                            weapon.Attack4DamageMultiplier = combos[3].Item2;
                        }

                        if (combos.Count > 4)
                        {

                            if (combos[4].Item1.Contains(WeaponAttackType.Slash.ToString())) weapon.Attack5Type = WeaponAttackType.Slash;
                            if (combos[4].Item1.Contains(WeaponAttackType.Pierce.ToString())) weapon.Attack5Type = WeaponAttackType.Pierce;
                            if (combos[4].Item1.Contains(WeaponAttackType.Blunt.ToString())) weapon.Attack5Type = WeaponAttackType.Blunt;
                            if (combos[4].Item1.Contains(WeaponAttackType.Bow.ToString())) weapon.Attack5Type = WeaponAttackType.Bow;
                            if (combos[4].Item1.Contains(WeaponAttackType.Block.ToString())) weapon.Attack5Type = WeaponAttackType.Block;
                            if (combos[4].Item1.Contains(WeaponAttackType.GroundDeployment.ToString())) weapon.Attack5Type = WeaponAttackType.GroundDeployment;

                            weapon.Attack5DamageMultiplier = combos[4].Item2;
                        }

                        
                    }


                    #endregion


                    #region attackSpeed

                    //attack speed cell
                    if (attackSpeed != null)
                    {
                        //<td> 1.2s/1.33s<br><br>1.13s </td>
                        //parse the inner html of the attack speed cell, in the format displayed above
                        List<float> ParseAttackSpeed(string innerHtml)
                        {
                            if (innerHtml.Trim() == "") return new List<float>();
                            List<float> attackSpeeds = new List<float>();

                            //initialize to innerHtml, over wrote if there is a bottom section
                            string[] topAndBottom = new string[] { innerHtml };

                            //if true, there is a top and bottom section, otherwise there is just a top section
                            if (innerHtml.Contains("<br><br>"))
                            {
                                topAndBottom = innerHtml.Split("<br><br>");
                            }

                            else if (innerHtml.Contains("<br> <br>"))
                            {
                                topAndBottom = innerHtml.Split("<br> <br>");
                            }

                            //cycle through top and bottom (if bottom exists) and parse out the strings at the slashes, then remove the 's', and turn into floats
                            foreach(string line in topAndBottom)
                            {
                                //initialize to line, overwrite if there are multiple attack speeds (contains "/")
                                string[] attackSpeedStrings = new string[] { line };

                                if(line.Contains("/"))
                                {
                                    attackSpeedStrings = line.Split("/");
                                }

                                //add to float list
                                foreach(string attackSpeed in attackSpeedStrings)
                                {
                                    attackSpeeds.Add(float.Parse(attackSpeed.Replace("s", "").Trim().TrimEnd()));
                                }
                            }

                            return attackSpeeds;
                        }

                        List<float> attackSpeeds = ParseAttackSpeed(attackSpeed.InnerHtml);

                        //can be null for crystal ball and other magical items / shields
                        if(attackSpeeds.Count == 0)
                        {
                            weapon.Attack1Speed = 0;
                        }
                        if(attackSpeeds.Count > 0)
                        {
                            weapon.Attack1Speed = attackSpeeds[0];
                        }
                        if (attackSpeeds.Count > 1)
                        {
                            weapon.Attack2Speed = attackSpeeds[1];
                        }
                        if (attackSpeeds.Count > 2)
                        {
                            weapon.Attack3Speed = attackSpeeds[2];
                        }
                        if (attackSpeeds.Count > 3)
                        {
                            weapon.Attack4Speed = attackSpeeds[3];
                        }
                        if (attackSpeeds.Count > 4)
                        {
                            weapon.Attack5Speed = attackSpeeds[4];
                        }

                    }


                    #endregion

                    //reach cell
                    if (reach != null) weapon.Reach = reach.InnerText.Trim().TrimEnd();


                    //actionMovementSpeed cell
                    if(actionMovementSpeed != null) weapon.ActionMovementSpeed = actionMovementSpeed.InnerText.Trim().TrimEnd();


                    //unique cell
                    if (unique != null)
                    {
                        if(!(unique.InnerText.Trim().TrimEnd() == "None"))
                        {

                            weapon.UniqueName = unique.InnerText.Trim().TrimEnd();
                            weapon.UniqueLink = wikiUrl + unique.SelectNodes("a").First().GetAttributeValue("href", "");
                        }
                    }

                    //reload speed cell
                    if (reloadSpeed != null)
                    {
                        weapon.ReloadSpeed = float.Parse(reloadSpeed.InnerText.Replace("s", ""));
                    }

                    //clip size cell
                    if(clipSize != null)
                    {
                        weapon.ClipSize = int.Parse(clipSize.InnerText);
                    }

                    weapons.Add(weapon);
                }

            }

            File.AppendAllText($"{folder}WeaponOBJS.txt", JsonSerializer.Serialize(weapons));


            return weapons;
        }

    }
}
