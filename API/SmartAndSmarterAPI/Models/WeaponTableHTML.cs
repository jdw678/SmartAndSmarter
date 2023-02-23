using HtmlAgilityPack;
using System.Net;
using System;
using System.Collections.Generic;
using System.Text.Json;

namespace SmartAndSmaterAPI.Models
{
    public class WeaponTableHTML
    {
        public string weaponName;
        public string className;
        public string slot;
        public string damage;
        public string movementSpeed;
        public string combo;
        public string attackSpeed;
        public string imapctZones;
        public string weaponReach;
        public string actionMovementSpeed;
        public string unique;

        string folder = "G:\\Programming\\Projects\\SmartAndSmarter\\API\\SmartAndSmarterAPI\\TestHTML\\";

        public async Task<string> LoadData(string htmlLink)
        {
            htmlLink = "https://darkanddarker.wiki.spellsandguns.com/Weapons";
            HttpClient client = new HttpClient();
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls13;
            client.DefaultRequestHeaders.Accept.Clear();
            var response = client.GetStringAsync(htmlLink);
            var awaitedResponse = await response;
            File.WriteAllText($"{folder}FullHTML.txt", awaitedResponse);
            return await response;

            /*
            HtmlDocument htmlSnippet = new HtmlDocument();
            htmlSnippet.LoadHtml(html);
            
            foreach(HtmlNode tr in htmlSnippet.DocumentNode.SelectNodes("//tr"))
            {
                foreach(HtmlNode td in tr.ChildNodes)
                {
                    Console.WriteLine($"Name: {td.Name} HTML: {td.InnerHtml}");
                }
            }

            return "";
            */
        }

        public Weapon ParseData(string html)
        {
            html = File.ReadAllText($"{folder}HTML.txt");
            HtmlDocument doc = new HtmlDocument();
            doc.LoadHtml(html);

            File.Delete($"{folder}WeaponOBJS.txt");

            string url = "https://darkanddarker.wiki.spellsandguns.com";

            List<Weapon> weapons = new List<Weapon>();

            foreach (HtmlNode table in doc.DocumentNode.SelectNodes("//table/tbody").ToList())
            {

                foreach(HtmlNode row in table.SelectNodes("tr"))
                {
                    Weapon weapon = new Weapon();
                    HtmlNodeCollection cells = row.SelectNodes("td");

                    HtmlNode name = cells[0];
                    HtmlNode classes = cells[1];
                    HtmlNode slot = cells[2];
                    HtmlNode damage = cells[3];
                    HtmlNode movementSpeed = cells[4];

                    //name cell of the table, innerText is name and has <img> tag with the image
                    weapon.Name = name.InnerText;
                    weapon.ImageLocation = url + name.Descendants("img").First().GetAttributeValue("src", "");



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


                    //if()

                    HtmlNode combo;
                    HtmlNode attackSpeed;
                    HtmlNode reach;
                    HtmlNode actionMovementSpeed;
                    HtmlNode unique;
                    HtmlNode clipSize;
                    HtmlNode reloadSpeed;

                    //necissary because not all columns exist all of the time
                    HtmlNode sweetSpot;
                    //sword table
                    if (cells.Count == 11)
                    {
                        weapon.ClipSize = null;
                        weapon.ReloadSpeed = null;

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

                        attackSpeed = cells[5];
                        reloadSpeed = cells[6];
                        actionMovementSpeed = cells[7];
                        clipSize = cells[8];
                        unique = cells[9];
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
    
                        reloadSpeed = cells[5];
                        actionMovementSpeed = cells[6];
                        unique = cells[7];

                    }

                    //TODO: Parse remaining cells;

                    weapons.Add(weapon);
                }

            }

            File.AppendAllText($"{folder}WeaponOBJS.txt", JsonSerializer.Serialize(weapons));

            //tableRows.RemoveAll(row => string.IsNullOrWhiteSpace(row.InnerText));
            /*
            foreach(var row in tableRows)
            {
                row.ChildNodes
                var name = row[0];

                weapon.Name = name.InnerText;
                weapon.ImageLocation = name.Descendants("img").First().GetAttributeValue("src", "");
                Console.WriteLine(name.Descendants("img").First().GetAttributeValue("src", ""));

                var classes = row[1];
                var slot = row[2];
                var damage = row[3];
                var movementSpeed = row[4];
                var combo = row[5];
                var attackSpeed = row[6];
                var sweetSpot = row[7];
                var reach = row[8];
                var actionMovementSpeed = row[9];
                var unique = row[10];
            }
            */



            List<string> innerHtml = new List<string>();
            List<string> innerText = new List<string>();
        /*
        foreach(HtmlNode tableRow in tableRows)
        {
            Weapon weapon = new Weapon();

            var name = itemsList[0];

            weapon.Name = name.InnerText;
            weapon.ImageLocation = name.Descendants("img").First().GetAttributeValue("src", "");
            Console.WriteLine(name.Descendants("img").First().GetAttributeValue("src", ""));

            var classes = itemsList[0];
            var slot = itemsList[0];
            var damage = itemsList[0];
            var movementSpeed = itemsList[0];
            var combo = itemsList[0];
            var attackSpeed = itemsList[0];
            var sweetSpot = itemsList[0];
            var reach = itemsList[0];
            var actionMovementSpeed = itemsList[0];
            var unique = itemsList[0];
        }
         */
            File.WriteAllLines($"{folder}InnerHTML.txt", innerHtml);
            File.WriteAllLines($"{folder}InnerText.txt", innerText);

            return new Weapon();
        }

    }
}
