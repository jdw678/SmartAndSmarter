using HtmlAgilityPack;
using System.Net;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Reflection;

namespace SmartAndSmaterAPI.Models
{
    public static class ArmorTableHTML
    {
        static string folder = Directory.GetCurrentDirectory() + "\\HardData\\";
        static string reactFolder = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.ToString() + "\\React\\smart-and-smarter-react\\src\\HardData\\";

        public static async Task<List<Armor>> ParseTable()
        {
            string htmlLink = "https://darkanddarker.wiki.spellsandguns.com/Armors";
            HttpClient client = new HttpClient();
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls13;
            client.DefaultRequestHeaders.Accept.Clear();
            var response = client.GetStringAsync(htmlLink);
            string html = await response;


            HtmlDocument doc = new HtmlDocument();
            doc.LoadHtml(html);
            doc.OptionEmptyCollection = true;

            File.Delete($"{folder}Armors.json");
            File.Delete($"{reactFolder}Armors.json");

            string wikiUrl = "https://darkanddarker.wiki.spellsandguns.com";

            List<Armor> armors = new List<Armor>();

            foreach (HtmlNode table in doc.DocumentNode.SelectNodes("//table/tbody").ToList())
            {
                File.WriteAllText(folder + "HTML.txt", table.InnerHtml);

                foreach (HtmlNode row in table.SelectNodes("tr"))
                {

                    //skip header
                    if (row.SelectNodes("td").Count == 0) continue;
                    Armor armor = new Armor();
                    HtmlNodeCollection cells = row.SelectNodes("td");

                    #region CellSetup

                    //cells that exist on every table
                    HtmlNode name = cells[0];
                    HtmlNode classes = cells[1];
                    HtmlNode armorRating = cells[2];
                    HtmlNode movementSpeed = cells[3];
                    HtmlNode stats = cells[4];

                    #endregion

                    //name cell of the table, innerText is name and has <img> tag with the image
                    armor.Name = name.InnerText.Trim().TrimEnd();
                    armor.ImageLocation = wikiUrl + name.Descendants("img").First().GetAttributeValue("src", "");

                    //wiki table is messed up for lightfoot boots, enter this record manually
                    if (armor.Name.Contains("Lightfoot"))
                    {
                        //armor mins
                        armor.BlackArmorMin = 6;
                        armor.GreyArmorMin = 7;
                        armor.WhiteArmorMin = 8;
                        armor.GreenArmorMin = 9;
                        armor.BlueArmorMin = 10;
                        armor.PurpleArmorMin = 11;
                        armor.OrangeArmorMin = 12;
                        armor.GoldArmorMin = 13;

                        //armor maxes are the same
                        armor.BlackArmorMax = 6;
                        armor.GreyArmorMax = 7;
                        armor.WhiteArmorMax = 8;
                        armor.GreenArmorMax = 9;
                        armor.BlueArmorMax = 10;
                        armor.PurpleArmorMax = 11;
                        armor.OrangeArmorMax = 12;
                        armor.GoldArmorMax = 13;

                        //armor movement speed
                        armor.MovementSpeed = 5;

                        if (armors.Exists(a => a.Name.Contains("Lightfoot")))
                            armors.RemoveAll(a => a.Name.Contains("Lightfoot"));

                        armors.Add(armor);

                        continue;
                    }


                        //class cell of the table, can have multiple classes, all wrapped in individual <a> tags
                        classes.SelectNodes("a").ToList().ForEach(a =>
                    {
                        if (a.InnerText.Contains("Fighter")) armor.FighterCanUse = true;
                        if (a.InnerText.Contains("Barbarian")) armor.FighterCanUse = true;
                        if (a.InnerText.Contains("Cleric")) armor.FighterCanUse = true;
                        if (a.InnerText.Contains("Wizard")) armor.FighterCanUse = true;
                        if (a.InnerText.Contains("Rogue")) armor.FighterCanUse = true;
                        if (a.InnerText.Contains("Ranger")) armor.FighterCanUse = true;
                    });


                    #region ArmorRating
                    if (armorRating != null)
                    {

                        //damge cell of the table, each armorRating is within a span in the format of "minArmorRating ~ maxArmorRating", may have either 1 or 2 armorRatings
                        HtmlNodeCollection armorRatingStrings = armorRating.SelectNodes("span");


                        //extract the armorRating numbers out of the string passed of format "number1 ~ number2"
                        float[] ParseArmorRating(string innerText)
                        {
                            //true if there are 2 armorRatings
                            if (innerText.Contains("~"))
                            {
                                //parse string into 2 strings, each being a armorRating number to be returned
                                string[] armorRatingStrings = innerText.Split(" ~ ");

                                //return float array of the 2 armorRating strings parsed to float
                                return new float[] { float.Parse(armorRatingStrings[0]), float.Parse(armorRatingStrings[1]) };
                            }
                            //true if there is only 1 armorRating
                            else
                            {
                                return new float[] { float.Parse(innerText) };
                            }
                        }

                        //make sure there is some data
                        if (armorRatingStrings.Count > 0)
                        {
                            //skip all ruby / cobalts
                            if(armorRatingStrings.Count == 1)
                            {
                                continue;
                            }

                            //black armorRating
                            //parse armorRating into float array of either length 1 or length 2
                            float[] armorRatings = ParseArmorRating(armorRatingStrings[0].InnerText);


                            //minArmorRating will always be the first float in armorRatings
                            armor.BlackArmorMin = armorRatings[0];


                            //if length 1, set armor.maxArmorRating to the number
                            if (armorRatings.Length == 1)
                                armor.BlackArmorMax = armorRatings[0];

                            //if length 2, set armor.maxArmorRating to [1]
                            else
                            {
                                armor.BlackArmorMax = armorRatings[1];
                            }


                            //grey armorRating
                            armorRatings = ParseArmorRating(armorRatingStrings[1].InnerText);
                            armor.GreyArmorMin = armorRatings[0];

                            if (armorRatings.Length == 1)
                                armor.GreyArmorMax = armorRatings[0];

                            else
                                armor.GreyArmorMax = armorRatings[1];



                            //white armorRating
                            armorRatings = ParseArmorRating(armorRatingStrings[2].InnerText);
                            armor.WhiteArmorMin = armorRatings[0];



                            if (armorRatings.Length == 1)
                                armor.WhiteArmorMax = armorRatings[0];

                            else
                                armor.WhiteArmorMax = armorRatings[1];



                            //green armorRating
                            armorRatings = ParseArmorRating(armorRatingStrings[3].InnerText);
                            armor.GreenArmorMin = armorRatings[0];

                            if (armorRatings.Length == 1)
                                armor.GreenArmorMax = armorRatings[0];

                            else
                                armor.GreenArmorMax = armorRatings[1];



                            //blue armorRating
                            armorRatings = ParseArmorRating(armorRatingStrings[4].InnerText);
                            armor.BlueArmorMin = armorRatings[0];


                            if (armorRatings.Length == 1)
                                armor.BlueArmorMax = armorRatings[0];

                            else
                                armor.BlueArmorMax = armorRatings[1];



                            //purple armorRating
                            armorRatings = ParseArmorRating(armorRatingStrings[5].InnerText);
                            armor.PurpleArmorMin = armorRatings[0];

                            if (armorRatings.Length == 1)
                                armor.PurpleArmorMax = armorRatings[0];

                            else
                                armor.PurpleArmorMax = armorRatings[1];



                            //orange armorRating
                            armorRatings = ParseArmorRating(armorRatingStrings[6].InnerText);
                            armor.OrangeArmorMin = armorRatings[0];

                            if (armorRatings.Length == 1)
                                armor.OrangeArmorMax = armorRatings[0];

                            else
                                armor.OrangeArmorMax = armorRatings[1];



                            //gold armorRating
                            armorRatings = ParseArmorRating(armorRatingStrings[7].InnerText);
                            armor.GoldArmorMin = armorRatings[0];

                            if (armorRatings.Length == 1)
                                armor.GoldArmorMax = armorRatings[0];

                            else
                                armor.GoldArmorMax = armorRatings[1];

                        }

                    }
                    #endregion


                    //movementSpeed
                    armor.MovementSpeed = float.Parse(movementSpeed.InnerText);

                    //stats
                    armor.Stats = stats.InnerHtml.Trim().TrimEnd();

                    armors.Add(armor);
                }

            }

            JsonSerializerOptions options = new JsonSerializerOptions
            {
                WriteIndented = true,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };


            File.AppendAllText($"{folder}Armors.json", JsonSerializer.Serialize(armors, options));
            File.AppendAllText($"{reactFolder}Armors.json", JsonSerializer.Serialize(armors, options));
            Console.WriteLine(reactFolder);


            return armors;
        }

    }
}
