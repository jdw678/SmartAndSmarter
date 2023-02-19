import React from 'react'
import '../CSS/WeaponTable.css';

type Props = {
    name?: string
}

function GetColor (damage: number)
{
    if(damage > 22 && damage <= 34) return "#006900";
    if(damage > 34) return "#FF0789";
}


export default function WeaponTable(props: Props) {
  return (
    <div id="content" style={{paddingTop: '45%',overflow: 'scroll'}}>

        <table cellSpacing={0}  className="wikitable sortable jquery-tablesorter Table">
            <thead>
                <tr>
                    <th className="Th" tabIndex={0} title="Sort ascending" style={{color: GetColor(32)}}>Name</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Class Name</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Attributes</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Damage</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Movement Speed</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Combo</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Attack Speed</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Sweet/Sour Spot</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Weapon Reach/Hitbox</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Action Movement Speed</th>
                    <th className="Th" tabIndex={0} title="Sort ascending">Unique</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td> <div><div className="rarity2 rounded relative"><a href="https://darkanddarker.wiki.spellsandguns.com/Arming_Sword" title="Arming Sword"><img alt="Arming Sword" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b4/Arming_Sword_2.png/60px-Arming_Sword_2.png" decoding="async" width="60" height="180" srcSet="https://darkanddarker.wiki.spellsandguns.com/images/b/b4/Arming_Sword_2.png 1.5x" data-file-width="90" data-file-height="270" /></a></div><br /><a href="https://darkanddarker.wiki.spellsandguns.com/Arming_Sword" title="Arming Sword"><strong>Arming Sword <br />(Main Hand)</strong></a></div> </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Fighter" title="Fighter">Fighter</a>, <a href="https://darkanddarker.wiki.spellsandguns.com/Ranger" title="Ranger">Ranger</a> </td>
                    <td>
                        <a>Attribute 1</a>
                        <input style={{borderRadius: 10}}></input>
                        <a>Attribute 2</a>
                        <input style={{borderRadius: 10}}></input>
                        <a>Attribute 3</a>
                        <input style={{borderRadius: 10}}></input>
                        <a>Attribute 4</a>
                        <input style={{borderRadius: 10}}></input>
                    </td>
                    <td> <span className="colorrarity0">22</span> <br /> <span className="colorrarity1">25 ~ 26</span> <br /> <span className="colorrarity2">27 ~ 29</span> <br /> <span className="colorrarity3">29 ~ 31</span> <br /> <span className="colorrarity4">31 ~ 34</span> <br /> <span className="colorrarity5">34 ~ 37</span> <br /> <span className="colorrarity6">37 ~ 40</span> <br /> <span className="colorrarity7">40 ~ 42</span> <br />  </td>
                    <td></td>
                    <td> Slash/Slash/Pierce <br /> 100%/100%/100% </td>
                    <td> 0.66s/0.62s/0.81s </td>
                    <td> 100%/90%/70% </td>
                    <td></td>
                    <td> Attack: -25%  </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Arming_Sword#Unique" title="Arming Sword">Kuma's Claw</a></td>
                </tr>

                <tr>
                    <td> <div><div className="rarity2 rounded relative"><a href="https://darkanddarker.wiki.spellsandguns.com/Falchion" title="Falchion"><img alt="Falchion" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/7/70/Falchion_2.png/60px-Falchion_2.png" decoding="async" width="60" height="180" srcSet="https://darkanddarker.wiki.spellsandguns.com/images/7/70/Falchion_2.png 1.5x" data-file-width="90" data-file-height="270" /></a></div><br /><a href="https://darkanddarker.wiki.spellsandguns.com/Falchion" title="Falchion"><strong>Falchion</strong></a></div> </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Fighter" title="Fighter">Fighter</a> </td>
                    <td> 1-Handed<br />Main-Hand </td>
                    <td> <span className="colorrarity0">30</span> <br /> <span className="colorrarity1">34 ~ 35</span> <br /> <span className="colorrarity2">36 ~ 39</span> <br /> <span className="colorrarity3">39 ~ 42</span> <br /> <span className="colorrarity4">42 ~ 46</span> <br /> <span className="colorrarity5">46 ~ 50</span> <br /> <span className="colorrarity6">50 ~ 53</span> <br /> <span className="colorrarity7">53 ~ 55</span> <br />  </td>
                    <td> -25 </td>
                    <td> Slash/Slash/Slash <br /> 100%/100%/100% </td>
                    <td> 0.88s/0.8s/0.95s </td>
                    <td> 100%/90% </td>
                    <td> Height: 51.07 <br /> Width: 10.71 </td>
                    <td> Attack: -30%  </td>
                    <td> None </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

/*
        <table cellspacing="0" className="wikitable sortable jquery-tablesorter" style="width:95%;color:#eee; background:transparent; text-align:center; vertical-align:middle;">
            <thead>
                <tr>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Name</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending"> className</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Slot</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Damage</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Movement Speed</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Combo</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Attack Speed</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Sweet/Sour Spot</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Weapon Reach/Hitbox</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Action Movement Speed</th>
                    <th style="font-weight:bold; color:#eee; background-color: rgb(220,220,220,0.2); text-align:center; vertical-align:middle; width:7%" className="headerSort" tabindex="0" title="Sort ascending">Unique</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className=" ">
                            <div className="rarity2 rounded relative">
                                <a href="https://darkanddarker.wiki.spellsandguns.com/Arming_Sword" title="Arming Sword">
                                    <img alt="Arming Sword" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b4/Arming_Sword_2.png/60px-Arming_Sword_2.png" decoding="async" width="60" height="180" srcSet="https://darkanddarker.wiki.spellsandguns.com/images/b/b4/Arming_Sword_2.png 1.5x" data-file-width="90" data-file-height="270">
                                </a>
                            </div>
                            <br />
                            <a href="https://darkanddarker.wiki.spellsandguns.com/Arming_Sword" title="Arming Sword"><strong>Arming Sword</strong></a></div> </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Fighter" title="Fighter">Fighter</a>, <a href="https://darkanddarker.wiki.spellsandguns.com/Ranger" title="Ranger">Ranger</a> </td>
                    <td> 1-Handed<br />Main-Hand </td>
                    <td> <span className="colorrarity0">22</span> <br /> <span className="colorrarity1">25 ~ 26</span> <br /> <span className="colorrarity2">27 ~ 29</span> <br /> <span className="colorrarity3">29 ~ 31</span> <br /> <span className="colorrarity4">31 ~ 34</span> <br /> <span className="colorrarity5">34 ~ 37</span> <br /> <span className="colorrarity6">37 ~ 40</span> <br /> <span className="colorrarity7">40 ~ 42</span> <br />  </td>
                    <td> -20 </td>
                    <td> Slash/Slash/Pierce <br /> 100%/100%/100% </td>
                    <td> 0.66s/0.62s/0.81s </td>
                    <td> 100%/90%/70% </td>
                    <td> Height: 54.78 <br /> Width: 11.6 </td>
                    <td> Attack: -25%  </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Arming_Sword#Unique" title="Arming Sword">Kuma's Claw</a></td>
                </tr>

                <tr>
                    <td> <div className=" "><div className="rarity2 rounded relative"><a href="https://darkanddarker.wiki.spellsandguns.com/Falchion" title="Falchion"><img alt="Falchion" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/7/70/Falchion_2.png/60px-Falchion_2.png" decoding="async" width="60" height="180" srcSet="https://darkanddarker.wiki.spellsandguns.com/images/7/70/Falchion_2.png 1.5x" data-file-width="90" data-file-height="270"></a></div><br /><a href="https://darkanddarker.wiki.spellsandguns.com/Falchion" title="Falchion"><strong>Falchion</strong></a></div> </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Fighter" title="Fighter">Fighter</a> </td>
                    <td> 1-Handed<br />Main-Hand </td>
                    <td> <span className="colorrarity0">30</span> <br /> <span className="colorrarity1">34 ~ 35</span> <br /> <span className="colorrarity2">36 ~ 39</span> <br /> <span className="colorrarity3">39 ~ 42</span> <br /> <span className="colorrarity4">42 ~ 46</span> <br /> <span className="colorrarity5">46 ~ 50</span> <br /> <span className="colorrarity6">50 ~ 53</span> <br /> <span className="colorrarity7">53 ~ 55</span> <br />  </td>
                    <td> -25 </td>
                    <td> Slash/Slash/Slash <br /> 100%/100%/100% </td>
                    <td> 0.88s/0.8s/0.95s </td>
                    <td> 100%/90% </td>
                    <td> Height: 51.07 <br /> Width: 10.71 </td>
                    <td> Attack: -30%  </td>
                    <td> None </td>
                </tr>

                <tr>
                    <td> <div className=" "><div className="rarity2 rounded relative"><a href="https://darkanddarker.wiki.spellsandguns.com/Longsword" title="Longsword"><img alt="Longsword" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/f/fa/Longsword_2.png/60px-Longsword_2.png" decoding="async" width="60" height="240" srcSet="https://darkanddarker.wiki.spellsandguns.com/images/f/fa/Longsword_2.png 1.5x" data-file-width="90" data-file-height="360"></a></div><br /><a href="https://darkanddarker.wiki.spellsandguns.com/Longsword" title="Longsword"><strong>Longsword</strong></a></div> </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Fighter" title="Fighter">Fighter</a> </td>
                    <td> 2-Handed </td>
                    <td> <span className="colorrarity0">29</span> <br /> <span className="colorrarity1">33 ~ 34</span> <br /> <span className="colorrarity2">35 ~ 38</span> <br /> <span className="colorrarity3">38 ~ 41</span> <br /> <span className="colorrarity4">41 ~ 45</span> <br /> <span className="colorrarity5">45 ~ 49</span> <br /> <span className="colorrarity6">49 ~ 52</span> <br /> <span className="colorrarity7">52 ~ 54</span> <br />  </td>
                    <td> -40 </td>
                    <td> Pierce/Slash/Slash <br /> 100%/100%/100%<br /> <br /> Riposte: Slash/Slash <br /> 150%/150% </td>
                    <td> 1.22s/0.97s/1.05s<br /><br />0.5s/0.57s </td>
                    <td> 100%/80%/60% </td>
                    <td> Height: 73.15 <br /> Width: 13.27 </td>
                    <td> Attack: -35% <br /> Blockreaction: -3% <br /> Riposte: -30% <br /> Riposteattack: -30%  </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Longsword#Unique" title="Longsword">Fulgor</a></td>
                </tr>

                <tr>
                    <td> <div className=" "><div className="rarity2 rounded relative"><a href="https://darkanddarker.wiki.spellsandguns.com/Rapier" title="Rapier"><img alt="Rapier" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/8/89/Rapier_2.png/60px-Rapier_2.png" decoding="async" width="60" height="180" srcSet="https://darkanddarker.wiki.spellsandguns.com/images/8/89/Rapier_2.png 1.5x" data-file-width="90" data-file-height="270"></a></div><br /><a href="https://darkanddarker.wiki.spellsandguns.com/Rapier" title="Rapier"><strong>Rapier</strong></a></div> </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Ranger" title="Ranger">Ranger</a>, <a href="https://darkanddarker.wiki.spellsandguns.com/Rogue" title="Rogue">Rogue</a> </td>
                    <td> 1-Handed<br />Main-Hand </td>
                    <td> <span className="colorrarity0">14 ~ 15</span> <br /> <span className="colorrarity1">16 ~ 17</span> <br /> <span className="colorrarity2">18 ~ 19</span> <br /> <span className="colorrarity3">20 ~ 21</span> <br /> <span className="colorrarity4">22 ~ 23</span> <br /> <span className="colorrarity5">24 ~ 25</span> <br /> <span className="colorrarity6">26 ~ 27</span> <br /> <span className="colorrarity7">28 ~ 29</span> <br />  </td>
                    <td> -17 </td>
                    <td> Pierce/Pierce/Pierce/Pierce <br /> 100%/100%/100%/100% </td>
                    <td> 0.56s/0.81s/0.79s/0.74s </td>
                    <td> 100% </td>
                    <td> Height: 56.53 <br /> Width: 13.48 </td>
                    <td> Attack: -25%  </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Rapier#Unique" title="Rapier">Viola</a></td>
                </tr>

                <tr>
                    <td> <div className=" "><div className="rarity2 rounded relative"><a href="https://darkanddarker.wiki.spellsandguns.com/Short_Sword" title="Short Sword"><img alt="Short Sword" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/e/ef/Short_Sword_2.png/60px-Short_Sword_2.png" decoding="async" width="60" height="180" srcSet="https://darkanddarker.wiki.spellsandguns.com/images/e/ef/Short_Sword_2.png 1.5x" data-file-width="90" data-file-height="270"></a></div><br /><a href="https://darkanddarker.wiki.spellsandguns.com/Short_Sword" title="Short Sword"><strong>Short Sword</strong></a></div> </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Fighter" title="Fighter">Fighter</a>, <a href="https://darkanddarker.wiki.spellsandguns.com/Ranger" title="Ranger">Ranger</a>, <a href="https://darkanddarker.wiki.spellsandguns.com/Rogue" title="Rogue">Rogue</a> </td>
                    <td> 1-Handed<br />Off-Hand </td>
                    <td> <span className="colorrarity0">15</span> <br /> <span className="colorrarity1">18 ~ 19</span> <br /> <span className="colorrarity2">20 ~ 22</span> <br /> <span className="colorrarity3">22 ~ 24</span> <br /> <span className="colorrarity4">24 ~ 27</span> <br /> <span className="colorrarity5">27 ~ 30</span> <br /> <span className="colorrarity6">30 ~ 33</span> <br /> <span className="colorrarity7">33 ~ 35</span> <br />  </td>
                    <td> -10 </td>
                    <td> Slash/Slash/Pierce <br /> 100%/100%/100% </td>
                    <td> 0.73s/0.81s/1.0s </td>
                    <td> 100% </td>
                    <td> Height: 37.88 <br /> Width: 8.01 </td>
                    <td> Attack: -9%  </td>
                    <td> None </td>
                </tr>

                <tr>
                    <td> <div className=" "><div className="rarity2 rounded relative"><a href="https://darkanddarker.wiki.spellsandguns.com/Zweihander" title="Zweihander"><img alt="Zweihander" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/28/Zweihander_2.png/60px-Zweihander_2.png" decoding="async" width="60" height="240" srcSet="https://darkanddarker.wiki.spellsandguns.com/images/2/28/Zweihander_2.png 1.5x" data-file-width="90" data-file-height="360"></a></div><br /><a href="https://darkanddarker.wiki.spellsandguns.com/Zweihander" title="Zweihander"><strong>Zweihander</strong></a></div> </td>
                    <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Barbarian" title="Barbarian">Barbarian</a>, <a href="https://darkanddarker.wiki.spellsandguns.com/Fighter" title="Fighter">Fighter</a> </td>
                    <td> 2-Handed </td>
                    <td> <span className="colorrarity0">33</span> <br /> <span className="colorrarity1">37 ~ 39</span> <br /> <span className="colorrarity2">40 ~ 44</span> <br /> <span className="colorrarity3">44 ~ 48</span> <br /> <span className="colorrarity4">48 ~ 53</span> <br /> <span className="colorrarity5">53 ~ 58</span> <br /> <span className="colorrarity6">58 ~ 62</span> <br /> <span className="colorrarity7">62 ~ 65</span> <br />  </td>
                    <td> -50 </td>
                    <td> Slash/Slash/Slash <br /> 100%/100%/100%<br /> <br /> Slash <br /> 100% </td>
                    <td> 1.23s/1.09s/1.26s<br /><br />1.4s </td>
                    <td> 100%/80%/60% </td>
                    <td> Height: 80.96 <br /> Width: 18.22 </td>
                    <td> Attack: -35%  </td>
                    <td> None </td>
                </tr>
            </tbody>
            <tfoot>
            </tfoot>
        </table>*/