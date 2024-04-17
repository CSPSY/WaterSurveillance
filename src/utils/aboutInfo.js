/**
 * @description 更多信息
*/
export const moreInfo = [
    {
        name: '游离氯',
        threshold: '0.3 ~ 2（mg/L）',
        desc: `游离氯是指水中未结合的氯化物离子。游离氯的存在通常是由于水处理过程中使用了氯消毒剂，或者是自然界中氯化物的存在。`,
        function: [
            `消毒效果： 适量的游离氯是常用的水处理消毒剂之一，可有效杀灭水中的细菌、病毒和其他病原微生物，保证饮用水的安全性。`,
            `水质监测指标： 游离氯的含量可作为衡量水体消毒效果的重要指标之一。通过监测游离氯的浓度变化，可以评估水质消毒过程的有效性，并指导水处理工艺的调整和改进。`
        ],
        influence: [
            `健康风险：\n  • 过高的游离氯含量： 高浓度的游离氯可能导致水中生成卤代消毒副产物，如三卤甲烷类化合物（THMs）和氯化酚等，这些化合物可能对人体健康产生潜在的危害，包括致癌和潜在的毒性效应。\n  • 过低的游离氯含量： 如果游离氯含量不足，水体中的微生物可能没有得到有效的消毒，增加了水中病原微生物的传播风险，可能导致水源污染和相关的健康问题，如胃肠道疾病的传播。`,
            `对水质的影响：\n  • 过高的游离氯含量： 高浓度的游离氯可能影响水的味道和气味，使水体失去原有的清新口感，影响饮用水的品质。\n  • 过低的游离氯含量： 如果游离氯含量过低，水中可能存在未被有效消毒的细菌和病原微生物，可能导致水质下降，不适宜饮用。`,
            `环境影响：\n  • 过高的游离氯含量： 高浓度的游离氯可能对水体中的生态系统产生不利影响，影响水生生物的生存和繁殖，破坏水生态平衡。\n  • 过低的游离氯含量： 如果游离氯含量过低，水中未被消毒的病原微生物可能对水生生物和水体生态系统造成负面影响。`
        ]
    },
    {
        name: 'ph值',
        threshold: '6.5 ~ 8.5',
        desc: `pH值用于描述水样的酸碱性。pH值表示水中氢离子（H⁺）的浓度，是一个对数尺度，通常在0到14之间。pH值7表示中性，小于7表示酸性，大于7表示碱性。不同生物和化学过程对 ph 值都有特定的要求。对于水体来说，适当的PH值有助于维持生态系统平衡，影响水中溶解物质的形态和生物的生存状况。`,
        function: [
            `评估水质性质： pH值是评估水质性质的重要指标之一。它可以提供有关水样的酸碱性特征，帮助判断水质是否适合特定用途，如饮用水、农业灌溉水或工业用水。`,
            `监测水处理过程： pH值的变化可以用来监测和控制水处理过程中的效果。在水处理过程中，调整pH值可以影响水中杂质的沉淀、消毒剂的活性和细菌的生长，从而改善水质。`
        ],
        influence: [
            `生态影响： pH值对水生态系统的影响很大。适宜的pH范围有利于水生生物的生存和繁殖，过高或过低的pH值可能导致水生生物对环境的适应能力降低，影响水生态系统的平衡。`,
            `水质危害：\n  • 过高的pH值： 高pH值可能导致水中金属离子的溶解度增加，从而导致金属污染的风险增加，影响水质安全。\n  • 过低的pH值： 低pH值可能导致水体酸化，对水生生物产生不利影响，破坏水体的生态平衡。`,
            `水处理效率：\n  • 过高的pH值： 高pH值可能降低一些水处理方法的效率，如凝聚沉淀、消毒剂的消毒效果等。\n  • 过低的pH值： 低pH值可能影响水处理剂的性能，降低水处理的效率，增加水处理成本。`
        ]
    },
    {
        name: '浑浊度',
        threshold: '≤ 0.5（NTU）',
        desc: `浑浊度用于描述水中悬浮颗粒物的数量和大小，以及水的透明度程度。这些悬浮颗粒物可以包括泥沙、粉尘、微生物、悬浮有机物等，它们使水看起来不透明或模糊。浑浊度通常以浑浊度单位（NTU）来表示，测量时通过光散射的强度来确定水样的浑浊程度。测量浑浊度有助于评估水体的清洁程度和适宜性。`,
        function: [
            `评估水质清洁度： 浑浊度是评估水质清洁度的关键指标之一。透明度高的水样通常被认为更为清洁，适合于饮用、游泳和生态环境。`,
            `监测水质污染： 浑浊度的变化可以指示水体中的污染情况。高浑浊度通常暗示水中悬浮颗粒物含量较高，可能来自于泥沙、泥土、污泥、微生物等污染源。`,
            `指导水处理过程： 监测浑浊度可以帮助水处理厂评估水样的处理需要，制定适当的水处理工艺，包括过滤、沉淀、消毒等，以确保水质符合标准。`
        ],
        influence: [
            `健康风险：\n  • 过高的浑浊度： 高浑浊度的水可能含有更多的微生物、有机物或其他污染物，可能对健康造成潜在风险，尤其是在饮用水中。\n  • 过低的浑浊度： 低浑浊度的水不一定意味着水质良好，因为某些微生物或污染物可能以溶解的形式存在，不会被浑浊度测试所检测到，可能存在其他健康风险。`,
            `环境影响：\n  • 过高的浑浊度： 高浑浊度可能影响水生态系统的稳定性，影响水中生物的生存和繁殖，破坏水体生态平衡。\n  • 过低的浑浊度： 低浑浊度可能导致水中微生物和浮游生物的生存环境受到影响，影响水生态系统的健康。`,
            `水处理效率：\n  • 过高的浑浊度： 高浑浊度的水样在处理过程中可能会增加处理的难度，增加过滤、沉淀、消毒等处理工艺的成本和能耗。\n  • 过低的浑浊度： 低浑浊度的水可能需要更少的处理过程，但需要确保水质没有其他潜在污染物。`
        ]
    },
    {
        name: '铂钴色度',
        threshold: '≤10',
        desc: `铂钴色度用于评估水样中的有机物含量和水的透明度。铂钴色度测试通过测量水样在特定条件下对铂钴标准溶液的吸光度来确定水样中有机物的浓度，进而反映水质的污染程度。。`,
        function: [
            `评估水质污染： 铂钴色度是评估水质污染程度的重要指标之一。通过监测铂钴色度的变化，可以初步了解水体中的有机物含量，从而评估水质状况。`,
            `指导水处理： 铂钴色度的监测结果可以指导水处理厂制定合适的处理工艺和控制措施，以减少有机物的含量，提高水质。`
        ],
        influence: [
            `健康风险：\n  • 过高的铂钴色度： 高铂钴色度通常暗示水体中有机物含量较高，可能存在有机污染物，某些有机物可能对人体健康产生潜在的危害，如致癌物质或有毒物质。\n  • 过低的铂钴色度： 过低的铂钴色度可能暗示水中缺乏适度的有机物，这可能对水质健康产生不利影响，例如可能导致水中微生物生长过快，增加水体受到污染的风险。`,
            `水质环境影响：\n  • 过高的铂钴色度： 高铂钴色度可能降低水的透明度和清洁度，影响水体的观感和生态环境。这可能影响水生生物的生存和繁殖，导致水生态系统受到损害。\n  • 过低的铂钴色度： 过低的铂钴色度可能暗示水体清洁度较高，但也可能意味着水中缺乏适度的有机物，这可能对水生态系统产生负面影响。`
        ]
    },
    {
        name: '总大肠菌群',
        threshold: '不得检出',
        desc: `总大肠菌群通常用于评估水质卫生情况。这些细菌通常与动物粪便相关，因此它们的存在表明水样可能受到了污染，其中可能包含了来自动物或人类粪便中的病原体。`,
        function: [
            `指示污染： 总大肠菌群的检测可以指示水样中是否存在粪便污染。因为这些菌群通常与动物或人类的肠道相关联，它们的存在可能表明水中存在病原微生物的潜在风险。`,
            `评估水质卫生： 总大肠菌群的检测是评估水质卫生的一种重要方式。水中存在的总大肠菌群越高，表示水质可能越差，存在的健康风险也可能更高。`,
            `指导水处理： 监测总大肠菌群的变化可以帮助水处理厂识别并针对性地处理可能存在的污染源，以确保提供安全的饮用水。`
        ],
        influence: [
            `健康风险： 过高的总大肠菌群含量可能暗示水样存在严重的污染，其中可能携带了病原微生物，如大肠埃希氏菌等。饮用受到污染的水可能导致胃肠道感染、腹泻等健康问题。`,
            `环境影响： 水中总大肠菌群过高可能影响水体生态系统的平衡，对水生生物的生存和繁殖产生负面影响。这可能导致生态系统的退化和生物多样性的减少。`,
            `社会经济影响： 水样中存在过高的总大肠菌群可能会导致水质不合格，需要采取额外的水处理措施。这可能增加水处理成本，并对当地社区的健康和经济产生不利影响。`
        ]
    },
    {
        name: '菌落总数',
        threshold: '≤50（MPN/ml）',
        desc: `菌落总数是指水样中所有细菌菌落的总数，通常通过培养方法来进行测定。菌落总数的检测可以提供有关水质卫生状况的重要信息，有助于评估水样中微生物污染的程度和水质的卫生状况。`,
        function: [
            `评估水质卫生： 菌落总数的检测是评估水质卫生状况的一种常用方法。菌落总数较高可能暗示水样受到了细菌污染，存在潜在的健康风险。`,
            `指示污染源： 菌落总数的变化可以指示水质受到了哪些污染源的影响。不同类型的污染源可能引入不同种类的细菌，因此菌落总数的检测有助于识别污染源并采取相应的控制措施。`,
            `监测水处理效果： 菌落总数的变化可以用来评估水处理工艺的效果。在水处理过程中，如果菌落总数没有达到预期的水质标准，可能需要调整或改进水处理工艺。`
        ],
        influence: [
            `健康风险： 过高的菌落总数可能暗示水样存在严重的微生物污染，可能包括致病性细菌。饮用受到污染的水可能导致胃肠道感染、呕吐、腹泻等健康问题。`,
            `水质影响： 菌落总数过高可能导致水质下降，使水变得不适合饮用、游泳或其他用途。此外，高菌落总数可能导致水体中的氧气消耗增加，影响水生态系统的稳定性。`,
            `环境影响： 过高的菌落总数可能影响水体生态系统的平衡，对水生生物的生存和繁殖产生负面影响。这可能导致生态系统的退化和生物多样性的减少。`
        ]
    }
];