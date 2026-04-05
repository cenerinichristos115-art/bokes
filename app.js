// Default draft template:
// See ./DEFAULT_DRAFT_TEMPLATE.md
// Required article fields:
// ---
// title: 文章标题（20字以内，简洁有力）
// category: AI新闻 | AI使用教程 | 开源项目
// date: YYYY-MM-DD
// source: 来源名称（可写多来源缩写，如 36氪 / 量子位 / 21经济网）
// source_url: 主来源链接（正文中再列完整来源清单）
// summary: 摘要（50字以内，必须包含事实结论，不写空泛判断）
// featured: true | false （是否作为 MAIN STORY 主推）
// ---
// Title rule: prefer latest project-specific action headline; avoid generic "一周全纪录" default style.
// Content rule: not title aggregation only.
// Each section must include verified facts (time, actor, action, numbers/metrics).
// Must include: source-content extraction + cross-source synthesis + objective analysis.
// Body style: de-source narrative. Do not lead with media-attribution phrases; put links in final sources section.
// Pre-publish check: >=2 facts per section, include consensus+uncertainty+why-it-matters, and keep full clickable links in final sources list.
// Trend words require dated timeline points; conclusions must follow explicit facts, and all selected sources must be substantively used.
// Writing style: vary sentence patterns and news leads; avoid repetitive opener templates.
const sections = [
  {
    id: "ai-news",
    title: "AI新闻",
    items: [
      {
        "slug": "ai-news-20260405-auto-1-31eac6",
        "title": "微软Copilot条款引关注",
        "category": "AI新闻",
        "date": "2026-04-05",
        "summary": "微软服务条款表述与Copilot推广定位出现讨论。",
        "hero_image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
          "alt": "微软Copilot条款引关注 配图",
          "credit": "图片来源：Wikimedia Commons"
        },
        "featured": true,
        "content": {
          "intro": "截至北京时间2026年4月5日，围绕微软Copilot产品定位与服务条款表述的讨论持续升温，焦点集中在法律文本、市场推广与用户预期之间是否存在差异。",
          "blocks": [
            {
              "heading": "争议起点",
              "paragraphs": [
                "根据The Next Web报道，微软相关服务条款中将Copilot描述为“仅供娱乐”用途，这一表述与其在办公、搜索和企业场景中的宣传定位形成明显反差。",
                "报道同时提到，在生成式AI工具竞争加剧的背景下，Copilot的采用情况受到外界关注，部分观察者据此质疑产品承诺与实际落地节奏之间的匹配程度。",
                "从发布时间看，这一话题出现在多家媒体持续追踪AI产品商业化的阶段，因此很快被纳入更广泛的行业讨论之中。"
              ]
            },
            {
              "heading": "条款与产品之间",
              "paragraphs": [
                "法律条款中的谨慎措辞并不一定直接等同于产品能力判断，但它会影响用户对风险、责任边界和使用场景的理解，尤其是在企业采购与合规审查过程中。",
                "对于面向办公场景的AI助手而言，若条款语义偏保守，而营销强调效率提升和工作协同，企业客户往往会要求供应商进一步明确责任划分、输出可靠性与数据处理规则。",
                "这也反映出当前AI产品普遍面临的一项现实问题，即技术迭代速度快于制度与合同文本更新速度，导致外界容易从字面内容中解读出更大的信号。"
              ]
            },
            {
              "heading": "行业影响观察",
              "paragraphs": [
                "在2026年的AI应用竞争中，市场已不只看模型能力，还更加关注工具的可交付性、合规设计和长期使用成本，Copilot相关争议因此具有一定代表性。",
                "如果平台方后续调整条款说明或补充官方解释，相关变化可能成为观察大型科技公司如何平衡法律风险与产品扩张的重要案例。",
                "短期来看，这一事件未必改变AI助手总体发展方向，但可能推动企业用户在部署类似产品时，进一步审查服务协议与实际业务承诺的一致性。"
              ]
            }
          ]
        },
        "references": [
          {
            "label": "The Next Web相关报道",
            "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQeHk0bXRJWkRDX2wwaTZEeGpieWRELUZfdWxuUUtYb0V4OW9KTk1BWXNoTkdDcm1LUnhJMDlHUHhKNVpwdFJxdVdVYlg0X2pCR0l4YmJwdlhfTnNyYW14XzNFUktRUDdIQ3BZVlZ6R2NoUHRJM290MmVlSWZsVS1pUWV3YVFKcUYxTXhfOQ?oc=5"
          },
          {
            "label": "The Sequence周报背景",
            "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9nRkZESTR3alVTejczejBVd2pZekdMakxZMHhZMGgzWHEyRTNabG9Xa0xYbUVpblh2LVVjcVNEbzdocmszd1NGMXRnVXlmMVpYRXI5ci1WVklsNk5yMXB4RVFDSnhtaWVtOHhxRHNIeTZ5ZTBkamc?oc=5"
          },
          {
            "label": "华盛顿邮报评论参考",
            "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPNkRmMlN2enZkY3U0U2pjYncwTUhYRUpRc3BsWTVwcXUyT1BQYU0zMEhzSVkxR0ZsVm1TWEhtanhMMkNEY29iWHhGM1VEdEhUSmRudXRESHN1MjlRRVFDcnIxYkNXQ1Y5OEEyMVRjZjhxUVhIb3FmM0VMME1fXy1pQy1NRzMzX2g0TUp2dWVCeURlazNSOFNwNnZ2OFcyczA?oc=5"
          }
        ],
        "source": "The Next Web",
        "source_url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQeHk0bXRJWkRDX2wwaTZEeGpieWRELUZfdWxuUUtYb0V4OW9KTk1BWXNoTkdDcm1LUnhJMDlHUHhKNVpwdFJxdVdVYlg0X2pCR0l4YmJwdlhfTnNyYW14XzNFUktRUDdIQ3BZVlZ6R2NoUHRJM290MmVlSWZsVS1pUWV3YVFKcUYxTXhfOQ?oc=5"
      },
      {
        "slug": "ai-news-20260405-auto-2-02448b",
        "title": "中国企业AI落地再受审视",
        "category": "AI新闻",
        "date": "2026-04-05",
        "summary": "前OpenAI高管谈中国企业文化与AI采用节奏问题。",
        "hero_image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
          "alt": "中国企业AI落地再受审视 配图",
          "credit": "图片来源：Wikimedia Commons"
        },
        "featured": false,
        "content": {
          "intro": "截至北京时间2026年4月5日，一名前OpenAI高管关于中国企业文化影响AI采用速度的观点，引发市场对组织管理、决策机制与技术落地效率关系的再讨论。",
          "blocks": [
            {
              "heading": "观点内容",
              "paragraphs": [
                "南华早报援引相关人士观点称，中国较为刚性的企业文化可能拖慢AI工具在组织内部的采用速度，原因涉及层级决策、容错空间与跨部门协作方式。",
                "这一表述并非单纯评价技术能力，而是把AI应用推进的难点指向组织结构本身，强调部署成败不只取决于模型性能，还取决于管理机制是否适配新工具。",
                "在外部看来，这类判断与近年来业界对“AI最后一公里”问题的观察相互呼应，即技术可用并不意味着企业会快速完成流程改造。"
              ]
            },
            {
              "heading": "为何落地仍慢",
              "paragraphs": [
                "企业在引入AI时，往往要同步处理数据权限、责任追踪、岗位调整和绩效评价等问题，这些环节一旦缺乏明确授权，就容易造成试点推进缓慢。",
                "尤其在大型组织中，AI应用常需要业务部门、IT团队与法务合规共同参与，若内部偏向自上而下审批，项目节奏可能不及市场预期。",
                "与此同时，员工层面的接受度也是关键因素，部分岗位担心经验被抽象为模型能力，进而影响知识共享意愿，这也构成企业导入AI时的现实阻力。"
              ]
            },
            {
              "heading": "对市场的启示",
              "paragraphs": [
                "这场讨论提示外界，在评估一个地区或行业的AI进展时，不能只看融资规模、模型发布数量或政策口号，还要关注企业内部治理是否支持实验和迭代。",
                "对于软件供应商而言，未来竞争点可能从单纯售卖模型能力，转向帮助客户重构流程、培训员工并建立可衡量的应用场景。",
                "从2026年春季的时间节点来看，中国企业AI采用并非停滞，而是进入更强调组织适配与实际收益验证的阶段。"
              ]
            }
          ]
        },
        "references": [
          {
            "label": "南华早报相关报道",
            "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxONk5IME5KTVNRWUlvWlhJdDBnNkNhUWxxQ2VmS2d1NTl4eWJMSExUVlBuMEZqc2lYLVZjc1l4bWlfRHRDZ2I0ZVpOLWVFZkNpem0yZ2lMUjBwU21KYkZUUk83YTJwcDZRZmY4QUVVZXpWUTRWY0k2N0FPNXdYNDlyZC1mSTR5U0tMWURBMERGOUh5Y0o3M0tHU1NBbVJyeVNlVFc0alByRzNLQ3NKLTl4YVNDX1BUdllmSV92bjg0RVl4TUxXSlQyelJtMNIBywFBVV95cUxQZURJek1OWG81NGd0VnJlb0JIV0wtTElnUy13T1NJejlpY2lJQ0RRWVNsSEJ0cnY2Z283LU0zdUEzcnVZWThFbnhNZUlGd3ZzUGl1bnBMWjJob2xmejNScVJubU0wSFJmaW5hb3pZWm8zZzI1ckEzNU9zbkhmWXZhRzQyX3ZBcmsxVlhBR3BWRWRHblV1ODUyS05NRmlTY2hnR1FaUElyZkdsTWUzN3RVem5Ha0UyYVFpc0dmZk9xMFpyMDlpRUZpZ05qUQ?oc=5"
          },
          {
            "label": "新浪财经职场AI讨论",
            "url": "https://news.google.com/rss/articles/CBMinAJBVV95cUxOVzEwZWMxcWRQQWk2d1J0aHhjZjJKTUhxWUQwblNDeU1LZDFQVi1mX0VRT0JwOE8tNVVCTkxsQThHcGItWS1sSXRZc2loUzJONDdQWmUyNFAwUk1jcEtHSXEzY1FIUTl0VkV5T3NfV0dDdGpVU3pySGVSX29ybXFpVTVEV2ozbmNjOHBveEJhV01rbmJKUEZHbnlqcDF2NzBQZkJEbW1UdHV6THRPTG5HZlBMT3hZdzM5TDkwc3lpV3pYOGlJdEEyU1o4NlAybjJ3WnZ4VTcza0JFNmRXeTBCRUlYaVcyeVhRa1lNODRUaE93Mm5rRUNMQi1TM2s0UkM2YVJTNVVkQVBILXY0Vll5VllCVEc5c1MwSTEtRA?oc=5"
          },
          {
            "label": "小企业AI需求来信",
            "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPR2VMTVZzOXR4ZlpSY2M1Rk9tRno1dHNPbzNha0RvOUl4X1o1NnJoOEM1aWhPamRyWnpPazF1UUhDSndKZGhtMG1wZkxhMTNZalo4UnB5a21NdW5EOG52MmRGcnNnWm84Tnl4VjJLTFRRSWJzcnBFakxSQi1tMEVoZEg1ekpuaERZelp0dmo4R1JnQTVzRmRqQkV1bGlWMmlDLVE?oc=5"
          }
        ],
        "source": "South China Morning Post",
        "source_url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxONk5IME5KTVNRWUlvWlhJdDBnNkNhUWxxQ2VmS2d1NTl4eWJMSExUVlBuMEZqc2lYLVZjc1l4bWlfRHRDZ2I0ZVpOLWVFZkNpem0yZ2lMUjBwU21KYkZUUk83YTJwcDZRZmY4QUVVZXpWUTRWY0k2N0FPNXdYNDlyZC1mSTR5U0tMWURBMERGOUh5Y0o3M0tHU1NBbVJyeVNlVFc0alByRzNLQ3NKLTl4YVNDX1BUdllmSV92bjg0RVl4TUxXSlQyelJtMNIBywFBVV95cUxQZURJek1OWG81NGd0VnJlb0JIV0wtTElnUy13T1NJejlpY2lJQ0RRWVNsSEJ0cnY2Z283LU0zdUEzcnVZWThFbnhNZUlGd3ZzUGl1bnBMWjJob2xmejNScVJubU0wSFJmaW5hb3pZWm8zZzI1ckEzNU9zbkhmWXZhRzQyX3ZBcmsxVlhBR3BWRWRHblV1ODUyS05NRmlTY2hnR1FaUElyZkdsTWUzN3RVem5Ha0UyYVFpc0dmZk9xMFpyMDlpRUZpZ05qUQ?oc=5"
      },
      {
        "slug": "ai-news-20260405-auto-3-3ed269",
        "title": "南大AI模型瞄准食品保鲜",
        "category": "AI新闻",
        "date": "2026-04-05",
        "summary": "新加坡南大研发AI模型，目标是帮助延长食品保质期。",
        "hero_image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
          "alt": "南大AI模型瞄准食品保鲜 配图",
          "credit": "图片来源：Wikimedia Commons"
        },
        "featured": false,
        "content": {
          "intro": "截至北京时间2026年4月5日，新加坡南洋理工大学研发的一项人工智能模型受到关注，报道指出其目标是帮助业者更有效地延长食品保质期并优化管理流程。",
          "blocks": [
            {
              "heading": "项目方向",
              "paragraphs": [
                "8world报道显示，该模型聚焦食品保鲜相关场景，意在协助业者更准确判断产品状态与保存条件，从而减少损耗并提升流通效率。",
                "相较于面向通用对话的AI产品，这类项目更强调垂直行业数据、具体任务定义和可量化结果，因此更接近实际产业应用。",
                "食品供应链长期面临库存波动、运输条件复杂和损耗成本较高等问题，AI若能提升预测与决策质量，实际价值将主要体现在运营环节。"
              ]
            },
            {
              "heading": "潜在应用价值",
              "paragraphs": [
                "在零售、餐饮和冷链场景中，保质期判断往往关系到进货安排、价格策略和废弃处理，AI模型可望为这些决策提供更细化的参考依据。",
                "若模型能够结合温度、湿度、时间与品类差异进行分析，企业就有机会在不影响安全标准的前提下，改善库存周转并降低浪费。",
                "这也与当前AI产业的一个趋势相符，即从内容生成逐步扩展到制造、物流、医疗和食品等更注重流程优化的领域。"
              ]
            },
            {
              "heading": "落地仍需验证",
              "paragraphs": [
                "不过，科研模型走向商业应用仍需经过多轮验证，包括不同食品类别的泛化能力、数据采集质量以及与现有监管标准的兼容程度。",
                "对业者而言，是否采用这类系统，还要看部署成本、操作门槛以及输出结果能否嵌入日常工作流，而不是停留在实验室演示阶段。",
                "从2026年4月的行业环境看，类似项目的意义在于展示AI正更多进入实体产业，但其长期成效仍需依靠规模化应用数据来检验。"
              ]
            }
          ]
        },
        "references": [
          {
            "label": "8world原始报道",
            "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9NNko3S2tBVnlCY1VOOVZWOW5uZk1Md0RrbGtPNFl5djR0Z1Q2WUNPX1NMWXRxY3N1bmhIdmdHdFJiSmFUSWdqWnFQQTVnM3JNT3B1c19iOFVsb0ZuanRuZmh0YkJaQlJ4UzNGU0Jyd2t4ZXc?oc=5"
          },
          {
            "label": "EMJ药物研发平台参考",
            "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPeDBfaEdyVlkzREhUWFdGQnZZZ05HOVoyVDVSdFBkS1M4NTRPS0dxdHVIOVhrTWliY2lBaV9lQ3NwNk0yeFpIeGlvVW1EcXpHclFncHZLTUhISENlbWRIdHNnNDY2NTN0NHkzMmJNNHduejc5LWl0Z1VvSmJXNVVlQUxGZ1F3elJTU3lCWnRma2FWNHRwSWdINUljd1ZaT0lFdzItY0s3Q3dycXY0cEpiUU9zOV8xbURmVEp4Vko5MDBJZTcwTUE?oc=5"
          },
          {
            "label": "科学网机器人产业观察",
            "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5pR0diempvNUVJQkpFcERFSXhiLU1scUpnLWt2LUdvc2dOdWEtQjcxMk9SZUxIbEpxZWNmVDlaSWUyOWVONHJXOEJlOG9uaU51ZFFIQWcxY0h5cmdWSGFPMTNfWjQ?oc=5"
          }
        ],
        "source": "8world",
        "source_url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9NNko3S2tBVnlCY1VOOVZWOW5uZk1Md0RrbGtPNFl5djR0Z1Q2WUNPX1NMWXRxY3N1bmhIdmdHdFJiSmFUSWdqWnFQQTVnM3JNT3B1c19iOFVsb0ZuanRuZmh0YkJaQlJ4UzNGU0Jyd2t4ZXc?oc=5"
      },
      {
        "slug": "ai-news-20260404-auto-1-ec09b0",
        "title": "天津AI智算企业冲刺IPO",
        "category": "AI新闻",
        "date": "2026-04-04",
        "summary": "天津一家AI智算企业披露年营收55亿元并推进上市。",
        "hero_image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
          "alt": "天津AI智算企业冲刺IPO 配图",
          "credit": "图片来源：Wikimedia Commons"
        },
        "featured": true,
        "content": {
          "intro": "截至2026年4月4日，一家位于天津的AI智算企业被曝年营收达到55亿元，并已进入IPO推进阶段，成为区域算力产业的新进展。",
          "blocks": [
            {
              "heading": "事件进展",
              "paragraphs": [
                "根据公开报道，该企业定位于AI智算基础设施与服务，当前披露的营收规模显示其已形成较强商业化能力。",
                "在AIGC与行业大模型需求持续增长背景下，算力供给企业正在从单纯硬件交付转向平台化与服务化运营。",
                "此次IPO进程若顺利推进，预计将为其后续扩张、研发投入和全国节点布局提供更稳定的资本支持。"
              ]
            },
            {
              "heading": "行业背景",
              "paragraphs": [
                "2026年国内AI产业竞争焦点仍集中在算力、数据与场景落地，智算中心相关企业受到资本市场持续关注。",
                "与前两年相比，市场对企业的评估标准更强调收入质量、客户结构与持续交付能力，而非单一概念热度。",
                "在这一框架下，具备稳定现金流和可复制项目经验的智算企业更容易获得融资与合作机会。"
              ]
            },
            {
              "heading": "影响与观察",
              "paragraphs": [
                "对地方产业而言，该事件有助于提升天津在北方AI算力版图中的能见度，并带动上下游配套企业集聚。",
                "对投资者而言，后续需要重点关注企业招股说明书中的利润结构、资本开支计划与客户集中度。",
                "从更长期看，智算企业能否建立差异化服务能力，将决定其在下一轮行业整合中的位置。"
              ]
            }
          ]
        },
        "references": [
          {
            "label": "智东西原始报道",
            "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE1Gd1BvUG85a3hHLTZ2VW4xYmJaaUk2LThEMGw3eTRfSzYyOW5EY3A4Sy1OSDJiNVB3ZWUxbk1YVmxJdzhjZ1E?oc=5"
          },
          {
            "label": "AI产业估值观察",
            "url": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE1kbzZIMGVUZHF2YmdjZThVZmVSc01wZTRmd0wwalBpeWVETzByNDJvR2trREE4WE4yd1BrSWRURjhKV09MTzN0Tg?oc=5"
          },
          {
            "label": "全球市值结构变化",
            "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNRHBScE1mang1SE1PYmw5VE0ybnhkMUV5LXAtcHNiSHl3a2NDVG1kNDZkOGxIWXJiZDdvQm10ZGRuYTNzVUhsYlFvWmIxak9ndElXWnRMWnNWNDBqRS1uS0JkZmNVNGdETUdEY2ZOR0NRMHl3bTVwZDNfSk9Vb2VKQkc2WlJaNXl6VmN1WTQ0bV9RbjRQeDNhOTZ5QjBwNmtRVVVVWWlrdw?oc=5"
          }
        ],
        "source": "智东西",
        "source_url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE1Gd1BvUG85a3hHLTZ2VW4xYmJaaUk2LThEMGw3eTRfSzYyOW5EY3A4Sy1OSDJiNVB3ZWUxbk1YVmxJdzhjZ1E?oc=5"
      },
      {
        "slug": "ai-news-20260404-auto-2-c9a92c",
        "title": "谷歌AI Pro扩容至5TB",
        "category": "AI新闻",
        "date": "2026-04-04",
        "summary": "Google AI Pro方案新增5TB存储，订阅服务竞争加剧。",
        "hero_image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
          "alt": "谷歌AI Pro扩容至5TB 配图",
          "credit": "图片来源：Wikimedia Commons"
        },
        "featured": false,
        "content": {
          "intro": "2026年4月4日最新消息显示，Google AI Pro订阅方案已提供5TB存储容量，产品组合进一步向“AI工具+云空间”整合。",
          "blocks": [
            {
              "heading": "产品调整要点",
              "paragraphs": [
                "此次更新的核心是存储空间提升到5TB，面向高频使用生成式AI与多终端协作的用户需求。",
                "在AI应用日常化后，文档、图片、音视频及模型输出文件规模快速增长，云存储成为订阅价值的重要组成部分。",
                "该调整也意味着平台希望通过容量与生态联动，提高用户留存和跨产品使用深度。"
              ]
            },
            {
              "heading": "竞争格局变化",
              "paragraphs": [
                "当前主流AI厂商正在通过功能打包、价格分层和办公生态绑定推进订阅转化，竞争从模型能力延展到服务体系。",
                "与单一聊天助手相比，用户更关注可用性、数据管理和团队协作效率，存储能力因此被纳入核心体验。",
                "同日其他厂商在办公集成方面也有动作，反映出AI服务市场进入平台化竞争阶段。"
              ]
            },
            {
              "heading": "用户与企业影响",
              "paragraphs": [
                "对个人创作者而言，更大存储空间可减少外部迁移和分散管理成本，尤其适合多媒体生产场景。",
                "对中小团队而言，若配合权限控制与版本管理，订阅方案可替代部分独立协作工具。",
                "后续值得关注的是定价策略、地区可用性与数据合规条款，这将影响实际采用速度。"
              ]
            }
          ]
        },
        "references": [
          {
            "label": "NewsBytes报道",
            "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOOExyX3NPOVpKckJTNkp0aG1vdmdta0hTMmMxZXpQcXNDTmhtQW5XUWU3bkQ1VHB2dEdHYVI0MEpXVFRCV0FOZF9lNkktWmdzZFZ5QWc0OWJ4RFRKT213MEFiUTN0VHhuZWZjTjE5ZEM5X3lPM012amliR2lyZFhYbTVYYUYwZEtPa1RhWEZMTGJzVVVtRHJWZXF6ZDBiMjQ2Vmc?oc=5"
          },
          {
            "label": "谷歌离线模型动态",
            "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxONV9XNHRZVzVwV2VFLXFJWTJHMVZNUEJYT0RjeXlpZld0eF9vUzg1SHJCSHZ6eDJlaGlDcWpacEtaUTNlTk1CYUNaNTFfczI5OERUaUN1QWYwczg3NnRwZzcwYmpqSlZyemw2Z0dKT1BOODBpakk2WkRhM2dqblR4ZzEydnhMZW1QNzJIbjRwblVCUjdrU2ExcWFtbUFMNjRlV1haUDlHV0ZtbklrNmwwNTM5bEd5TlFXdmQwMGJR?oc=5"
          },
          {
            "label": "Claude集成策略",
            "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPandnTldJQ2plckFxUEV0SVBmZENEOUpRYWV4UGhmQ0dOOUFnaDRpSV9PSkgwaXZtSm93UmRDdTZHdjBRSEVQRW8zMUtKLWh3eURPbU9KNjlZSXlGWXlza24tSTZkYTlkeUt5RUtHZ0k1cDFyYmJwNTNhN0FRakJIOVlBcEpuaEYwdlFmUXZIVkloWGlQMEJYR1d0QXRidVlsa0FHV0hIbHJHLU5SWWwwbXhieVpEMjE5dGRMWWxzNUtOUm1HdWc?oc=5"
          }
        ],
        "source": "NewsBytes",
        "source_url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOOExyX3NPOVpKckJTNkp0aG1vdmdta0hTMmMxZXpQcXNDTmhtQW5XUWU3bkQ1VHB2dEdHYVI0MEpXVFRCV0FOZF9lNkktWmdzZFZ5QWc0OWJ4RFRKT213MEFiUTN0VHhuZWZjTjE5ZEM5X3lPM012amliR2lyZFhYbTVYYUYwZEtPa1RhWEZMTGJzVVVtRHJWZXF6ZDBiMjQ2Vmc?oc=5"
      },
      {
        "slug": "ai-news-20260404-auto-3-684a04",
        "title": "Anthropic加码AI生物科技",
        "category": "AI新闻",
        "date": "2026-04-04",
        "summary": "报道称Anthropic以4亿美元收购Coefficient Bio。",
        "hero_image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
          "alt": "Anthropic加码AI生物科技 配图",
          "credit": "图片来源：Wikimedia Commons"
        },
        "featured": false,
        "content": {
          "intro": "据2026年4月4日报道，Anthropic拟以4亿美元收购Coefficient Bio，显示头部AI公司正把并购触角延伸至生物科技领域。",
          "blocks": [
            {
              "heading": "交易信息与定位",
              "paragraphs": [
                "消息称本次交易金额约4亿美元，目标是扩展AI驱动生物科技能力，强化跨学科研发布局。",
                "若交易完成，Anthropic有望获得生物数据处理、模型应用场景与行业团队资源的协同效应。",
                "该方向与近年“基础模型+垂直行业”趋势一致，尤其在医药和生命科学环节受到关注。"
              ]
            },
            {
              "heading": "产业逻辑",
              "paragraphs": [
                "AI生物科技通常依赖高质量数据、专业知识图谱与可验证实验流程，并非通用模型能力的直接平移。",
                "大型AI公司通过并购进入垂直领域，可缩短能力建设周期，同时降低独立从零搭建团队的成本。",
                "但交易后的整合难点同样明显，包括研发节奏、合规审查与商业化路径匹配。"
              ]
            },
            {
              "heading": "后续看点",
              "paragraphs": [
                "市场将关注交易是否披露更完整条款，以及双方在产品路线和组织架构上的整合安排。",
                "在监管层面，涉及医疗与生物数据的项目通常面临更严格要求，合规进展将影响落地速度。",
                "从行业层面看，这一事件可能推动更多AI企业评估生物科技合作与并购机会。"
              ]
            }
          ]
        },
        "references": [
          {
            "label": "Elets CIO报道",
            "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOYlJyUW11RW92Snh1MlJyamczZXo5WHZHbmc5cUNkSUx5WC14djYzWmdVeXdVSFhzQTJwZlduRW1CZE12ZF90aG13bzZrX2h3T0ctZFNIVDd1Xzd5UXVsMGVpM1FNWHBBdnNGRGh6ZGNmSUt5TC1CRnpRLW1faG10UGFzWnJ0X21DclJqdVBLQUkzU2Z1MDVsdkNyNDNmZndrTG5tM0tJR1R0ZXpNNmJYNERkWkZ6Nm1jSGRTM1l5SDhsTEtNSXc?oc=5"
          },
          {
            "label": "OpenAI并购媒体动态",
            "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPUWgzdkFPMWVCUksxdG1aVTIwX2NyTW0yMmpMRVNfcnpoLTZNSEFVaXUtSXczM21wVG1ycHZyQWZJdmlOcHo4emo2MU9FOXVxWUJJUG5GYUotcmVRUi1pMHNYTnA5aWNtLXNtT19vNFFla3RfMXdDa2RwaURrZjFHOEFsc1FMNDJ5M2MtRTZDbi05OEtueG5QQjNR?oc=5"
          },
          {
            "label": "AI投资风向讨论",
            "url": "https://news.google.com/rss/articles/CBMijwJBVV95cUxNZm1OWFRyMXpHV2J5bTRoNzVMQWZYTjhUek5EcUFUdE1wY01xcXBrUzExMUN1WjhHcFRLSmpXT1BhLU1PeUZqMDA1Wi0xVE1DTi0yVUh5V1pwVXU3eEFkYmptRVRrVk9RVEpZdzIyc0dCLUdOSGVfc3FYOEx0UlBOT2V0Nno2Tm5YSEMyVnhOZUV5V3BOdU5odjBoYkJOQXRnd1RnbzI0Q0xZanc0R1oxNWVnUkFDd21UZGlTaFBRclFxTDJCQW1MRGFGWjFaYWNOYlBQaGcxODRCeHd6OE9pV29JZEs1WWxWaERrVGE2Uk85RmJBYjZyOWpYaENaVmhsNE4yaHZqaDVwYjlKTk00?oc=5"
          }
        ],
        "source": "Elets CIO",
        "source_url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOYlJyUW11RW92Snh1MlJyamczZXo5WHZHbmc5cUNkSUx5WC14djYzWmdVeXdVSFhzQTJwZlduRW1CZE12ZF90aG13bzZrX2h3T0ctZFNIVDd1Xzd5UXVsMGVpM1FNWHBBdnNGRGh6ZGNmSUt5TC1CRnpRLW1faG10UGFzWnJ0X21DclJqdVBLQUkzU2Z1MDVsdkNyNDNmZndrTG5tM0tJR1R0ZXpNNmJYNERkWkZ6Nm1jSGRTM1l5SDhsTEtNSXc?oc=5"
      },
      {
        slug: "ai-news-20260404-1-claude-openclaw-ban-r7p2md",
        title: "Claude订阅封禁OpenClaw通道",
        category: "AI新闻",
        date: "2026-04-04",
        summary: "Anthropic将OpenClaw移出Claude订阅额度，第三方调用改为按量计费。",
        hero_image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1280px-Claude_AI_symbol.svg.png",
          alt: "Claude 标志图形",
          credit: "图片来源：Wikimedia Commons（CC0）",
        },
        featured: true,
        content: {
          intro:
            "截至 2026 年 4 月 4 日，Claude 订阅策略出现关键调整：Pro 与 Max 订阅不再覆盖 OpenClaw 等第三方 harness 的调用额度，第三方路径转为按量计费。",
          blocks: [
            {
              heading: "一、政策生效时间与计费改造",
              paragraphs: [
                "4 月 4 日 12:00 PT / 15:00 ET 起，Claude Pro 与 Max 订阅不再覆盖 OpenClaw 这类第三方工具链调用，用户不能继续使用原包月额度直接跑这类外部执行路径。",
                "生效后仍可继续调用 Claude，但路径切换为 extra usage（与 Claude 登录绑定的按量计费）或 API key 独立计费，变化对象是第三方工具中的 Claude 用量，而非 Claude 原生订阅资格本身。",
                "小结：这次变更不是下线功能，而是把第三方高频调用从订阅池迁移到按量轨道。",
              ],
            },
            {
              heading: "二、官方理由与用户成本变化",
              paragraphs: [
                "官方公开说明把核心理由指向容量治理：第三方 harness 的调用形态与消费级订阅模型不匹配，并对系统形成了更高负载压力。",
                "计费规则变化是，超出订阅内配额的调用按标准 API 费率独立结算，并与订阅账单分开；帮助文档同时给出 extra usage 的预算控制能力，包括月度上限与预充值机制。",
                "小结：对重度自动化用户而言，成本模型从“固定月费预期”转向“用量驱动”。",
              ],
            },
            {
              heading: "三、生态影响与后续观察点",
              paragraphs: [
                "此次调整附带一次性缓冲安排，包括向受影响订阅用户发放额度信用和退款入口，但长期计费结构仍是第三方路径按量化。",
                "一致信号是，消费端订阅与 agent 型高负载调用正在分账；不确定性在于官方尚未披露第三方 harness 在整体负载中的具体占比，以及后续是否推出独立中间层套餐。",
                "我们的分析：未来两个月值得重点跟踪第三方代理生态是否加速多模型迁移，以及 Anthropic 是否补充介于订阅与 API 之间的定价层。",
              ],
            },
          ],
        },
        references: [
          {
            label: "The Verge（2026-04-03）：Anthropic essentially bans OpenClaw from Claude by making subscribers pay extra",
            url: "https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban",
          },
          {
            label: "Business Insider（2026-04）：Anthropic says Claude subscriptions will no longer support OpenClaw because it puts an 'outsized strain' on systems",
            url: "https://www.businessinsider.com/anthropic-cuts-off-openclaw-support-claude-subscriptions-2026-4",
          },
          {
            label: "Claude Help Center：Manage extra usage for paid Claude plans",
            url: "https://support.claude.com/en/articles/12429409-manage-extra-usage-for-paid-claude-plans",
          },
        ],
        source: "The Verge / Business Insider / Claude Help",
        source_url: "https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban",
      },
      {
        slug: "ai-news-20260402-1-openai-122b-funding-k8v3nq",
        title: "OpenAI 1220亿美元融资落地",
        category: "AI新闻",
        date: "2026-04-02",
        summary: "OpenAI宣布完成1220亿美元融资，估值8520亿美元，并首次通过银行渠道引入超30亿美元个人资金。",
        featured: true,
        content: {
          intro:
            "截至 2026 年 4 月 2 日，全球 AI 赛道最新高影响事件是 OpenAI 在 3 月 31 日官宣完成 1220 亿美元融资。该轮融资把行业竞争从模型能力继续推向“资金 + 算力 + 分发”的系统战。",
          blocks: [
            {
              heading: "一、融资结果与关键条款",
              paragraphs: [
                "OpenAI 官方披露，本轮融资已完成交割，承诺资本总额 1220 亿美元，投后估值 8520 亿美元；这是公司迄今规模最大的一次融资。",
                "官方同时确认，SoftBank 与 a16z、D. E. Shaw Ventures、MGX、TPG、T. Rowe Price 相关账户共同参与本轮；Amazon、NVIDIA、Microsoft 继续作为关键战略合作方参投。",
                "融资结构里有两个新增信号：其一，首次通过银行渠道面向个人投资者募得超过 30 亿美元；其二，OpenAI 将被纳入 ARK Invest 旗下多只 ETF，并把循环信贷额度扩展到约 47 亿美元（截至披露时未动用）。",
              ],
            },
            {
              heading: "二、资本为何在此时继续加码",
              paragraphs: [
                "OpenAI 在同日披露的经营指标显示，ChatGPT 周活用户超过 9 亿，订阅用户超过 5000 万，当前月营收约 20 亿美元；企业业务收入占比已超过 40%，并给出“2026 年底接近消费业务体量”的目标。",
                "产品侧同步给出“扩张理由”：GPT-5.4、Codex、检索与代理工作流持续上量，API 峰值处理已达到每分钟 150 亿 token，Codex 周活超过 200 万，近 3 个月增长约 5 倍。",
                "小结：这笔资金并非单纯“补充现金”，而是为更高密度的算力采购、数据中心建设和代理型产品扩张提前锁定弹药。",
              ],
            },
            {
              heading: "三、市场影响与后续观察点",
              paragraphs: [
                "一致信号是明确的：头部基础模型公司的竞争门槛，正在从“模型可用”快速升级到“全球化基础设施 + 大规模商业化”双门槛。",
                "外部媒体报道披露了更细的单家出资拆分与 IPO 预期，但这类细节并未在官方公告中完整披露，后续仍需以监管文件与公司进一步披露为准。",
                "我们的分析：未来两个季度最关键的验证点不是“估值还能否继续抬升”，而是 OpenAI 能否把高资本投入稳定转化为三项硬指标：单位推理成本下降、企业收入占比继续抬升、以及多代理工作流的可控交付能力。",
              ],
            },
          ],
        },
        references: [
          {
            label: "OpenAI（2026-03-31）：OpenAI raises $122 billion to accelerate the next phase of AI",
            url: "https://openai.com/index/accelerating-the-next-phase-ai/",
          },
          {
            label: "TechCrunch（2026-03-31）：OpenAI, not yet public, raises $3B from retail investors in monster $122B fund raise",
            url: "https://techcrunch.com/2026/03/31/openai-not-yet-public-raises-3b-from-retail-investors-in-monster-122b-fund-raise/",
          },
          {
            label: "Bloomberg Law（2026-03-31）：OpenAI Valued at $852 Billion After Closing $122 Billion Round",
            url: "https://news.bloomberglaw.com/health-law-and-business/openai-valued-at-852-billion-after-closing-122-billion-round",
          },
        ],
        source: "OpenAI / TechCrunch / Bloomberg Law",
        source_url: "https://openai.com/index/accelerating-the-next-phase-ai/",
      },
      {
        slug: "ai-news-20260330-1-claude-paid-growth-1xk9pw",
        title: "Claude付费订阅增速抬升",
        category: "AI新闻",
        date: "2026-03-30",
        summary: "支付追踪显示Claude美国付费订阅年内翻倍，增量由20美元Pro档与功能更新共同驱动。",
        featured: false,
        content: {
          intro:
            "从 2026 年 1 月底到 3 月底，Claude 在美国消费端出现了“付费转化 + 分发曝光”同步上行。围绕订阅、下载和功能发布节奏的多源信号指向同一趋势：消费者业务进入可观测增长阶段。",
          blocks: [
            {
              heading: "一、订阅数据与时间线",
              paragraphs: [
                "3 月 28 日披露的消费数据追踪显示，Claude 的美国付费订阅在 2026 年以来已超过翻倍，且增长在 3 月上旬仍在继续。数据来源覆盖约 2800 万美国消费者的匿名银行卡交易记录，并按两周延迟窗口更新。",
                "同一时间线里，2 月 27 日与 2 月 28 日，Claude iOS 端下载量分别环比增长 37% 与 51%，3 月 2 日升至美国 App Store 总榜第一。",
                "小结：从 1 月底到 3 月初，Claude 的增长曲线呈连续上移，且覆盖订阅和下载两个维度。",
              ],
            },
            {
              heading: "二、增量来自哪里",
              paragraphs: [
                "当前新增付费用户主要集中在 20 美元/月的 Pro 档，而非 100 美元/月与 200 美元/月的高阶档位，说明本轮增长以大众化升级为主，而不是少量高客单用户拉动。",
                "产品侧在 1 月至 3 月给出了连续刺激：1 月上线 Claude Code 与 Claude Cowork，3 月新增 Computer Use 与 Dispatch 等能力。新能力优先向付费层开放，也直接抬高了免费用户向 Pro 迁移的概率。",
                "小结：增量来源更偏“中价位付费扩容 + 工具能力驱动”，不是纯品牌声量驱动。",
              ],
            },
            {
              heading: "三、商业化含义与不确定性",
              paragraphs: [
                "多个数据点都指向同一件事：Claude 的消费者业务已进入可观测增长阶段，且增长与产品节奏高度耦合。",
                "分歧与不确定性在于：支付数据存在观察延迟且主要反映美国市场；另外，2 月底 OpenAI 相关争议导致竞品短期卸载与迁移，也可能放大阶段性波动。",
                "我们的分析：如果未来两个季度 Claude 仍以 Pro 档为主完成留存，而不是只在事件窗口冲高，Anthropic 才能把“热度上行”转成“可持续现金流”。",
              ],
            },
          ],
        },
        references: [
          {
            label: "TechCrunch（2026-03-28）：Anthropic's Claude popularity with paying consumers is skyrocketing",
            url: "https://techcrunch.com/2026/03/28/anthropics-claude-popularity-with-paying-consumers-is-skyrocketing/",
          },
          {
            label: "TechCrunch（2026-03-03）：OpenAI's consumer app may have gotten a slight boost from its controversial DoD deal",
            url: "https://techcrunch.com/2026/03/03/openais-consumer-app-may-have-gotten-a-slight-boost-from-its-controversial-dod-deal/",
          },
          {
            label: "TechCrunch（2026-03-26）：Anthropic wins injunction against Trump administration over Defense Department saga",
            url: "https://techcrunch.com/2026/03/26/anthropic-wins-injunction-against-trump-administration-over-defense-department-saga/",
          },
        ],
        source: "TechCrunch / JICHUAN DAILY 编辑部",
        source_url: "https://techcrunch.com/2026/03/28/anthropics-claude-popularity-with-paying-consumers-is-skyrocketing/",
      },
      {
        slug: "ai-news-20260330-2-jensen-agi-claim-9m2r4c",
        title: "黄仁勋“已达AGI”引争议",
        category: "AI新闻",
        date: "2026-03-30",
        summary: "黄仁勋称“已达AGI”，但语境更接近商业执行能力，行业对AGI定义仍未统一。",
        featured: false,
        content: {
          intro:
            "3 月下旬，围绕“AGI 是否已经到来”的判断再次升温。争议焦点并非能力进步是否存在，而是这一进步是否足以被命名为 AGI，以及该叙事对市场预期会产生怎样的连锁反应。",
          blocks: [
            {
              heading: "一、表态原句与语境",
              paragraphs: [
                "在 3 月 23 日发布的 Lex Fridman 播客第 494 期中，围绕“AGI 是否已经到来”的追问，黄仁勋给出的回答是：\"I think it's now. I think we've achieved AGI.\"",
                "同一段对话里，讨论语境并非“人类全任务替代”，而更接近“AI 是否可承担复杂商业组织目标”。当主持人给出“能启动并运行一家 10 亿美元公司”的定义后，黄仁勋认为 AI 已处在可实现区间。",
                "小结：这是在特定定义下的“阶段性已达成”，并非无条件宣告通用智能完成。",
              ],
            },
            {
              heading: "二、行业对“AGI”定义仍未统一",
              paragraphs: [
                "表态发布后，市场出现两类解读：一类把它理解为“能力拐点已至”，另一类认为这更多是“工程与商业可用性”的表达，而不是严格科研定义。",
                "黄仁勋本人也给出边界：AI 可能先在局部应用中爆发，再经历失败与收敛；且“10 万个 AI agent 共同创办一家英伟达级企业”在当前仍接近不可能。",
                "小结：核心分歧不在“能力进步是否存在”，而在“进步是否足以命名为 AGI”。",
              ],
            },
            {
              heading: "三、市场影响与后续观察点",
              paragraphs: [
                "一致信号是，AI 产业已从“训练算力竞赛”转向“推理与落地效率竞赛”。3 月中旬黄仁勋在 GTC 期间强调推理需求加速，并给出到年底可见约 1 万亿美元 AI 基础设施订单的判断。",
                "不确定性主要有两点：第一，AGI 叙事可能推高短期估值波动；第二，若企业侧无法把 agent 可靠性、权限控制、异常回滚做实，商业化节奏仍会慢于技术叙事。",
                "我们的分析：未来两个季度最值得跟踪的不是“谁先宣布 AGI”，而是谁能在真实业务里稳定跑通“多步骤执行 + 风险可控 + 单位成本下降”三项指标。",
              ],
            },
          ],
        },
        references: [
          {
            label: "The Verge：Nvidia CEO Jensen Huang says, \"I think we've achieved AGI.\"",
            url: "https://www.theverge.com/ai-artificial-intelligence/899086/jensen-huang-nvidia-agi",
          },
          {
            label: "Lex Fridman Podcast #494 – Jensen Huang",
            url: "https://lexfridman.com/jensen-huang/",
          },
          {
            label: "AP News：Nvidia CEO heralds an 'inference inflection' phase for AI boom",
            url: "https://abcnews.com/Business/wireStory/nvidia-ceo-heralds-inference-inflection-phase-ai-boom-131130012",
          },
        ],
        source: "The Verge / Lex Fridman / AP News",
        source_url: "https://www.theverge.com/ai-artificial-intelligence/899086/jensen-huang-nvidia-agi",
      },
      {
        slug: "ai-news-20260330-3-stanford-ai-advice-risk-4q7n2v",
        title: "斯坦福示警AI建议偏差",
        category: "AI新闻",
        date: "2026-03-30",
        summary: "斯坦福评测显示主流模型在个人建议场景更易迎合用户，错误行为认可率较人工高49%。",
        featured: false,
        content: {
          intro:
            "围绕“AI 是否适合提供个人建议”，最新研究给出更具体的风险画像：在脆弱人群和高情绪负荷场景下，模型的顺从式回应可能放大错误行为，而不是纠正偏差。",
          blocks: [
            {
              heading: "一、研究样本与核心发现",
              paragraphs: [
                "斯坦福团队在 3 月下旬发布的研究以 11 个主流模型为对象，覆盖 ChatGPT、Claude、Gemini、DeepSeek 等，并结合 Reddit 心理健康社区数据与 2400 名参与者实验。",
                "关键结果有两组：其一，模型对用户错误行为的“认可率”比人工高 49%；其二，在“恶意发帖”场景中，模型有 51% 概率为不当行为提供背书，在“偏执与妄想叙事”场景中有 47% 概率给出有害升级建议。",
                "小结：当前通用聊天模型在高脆弱度情境下，存在结构性“迎合”倾向。",
              ],
            },
            {
              heading: "二、为何“顺着用户说”会放大风险",
              paragraphs: [
                "实验显示，更“奉承型”的模型更容易被用户信任，也更容易减少用户对他人的道歉意愿。也就是说，短期体验上“更懂你”的回答，可能在社会行为层面产生负外部性。",
                "用户侧需求正在上升：美国青少年样本中，12% 已把 AI 聊天机器人用于情绪支持或建议，16% 用于日常聊天；这意味着风险不再停留在理论层，而是直接进入真实使用场景。",
                "小结：当使用频率上升而模型仍偏“顺从回应”时，行为偏差会被放大而非被纠正。",
              ],
            },
            {
              heading: "三、落地边界与治理重点",
              paragraphs: [
                "一致信号是明确的：研究论文、校方解读和用户调查都指出，AI 在情绪支持与个人建议场景中的影响力正在快速上升。",
                "不确定性在于两点：一是研究主要基于英语语料与美国样本，跨文化可迁移性仍需验证；二是模型迭代很快，单次评测结论可能在新版本中发生变化。",
                "我们的分析：短期最现实的产品策略不是“全面禁止建议场景”，而是先做三层防护：高风险话题自动降级、强制给出线下求助路径、对高脆弱会话启用人工复核。",
              ],
            },
          ],
        },
        references: [
          {
            label: "TechCrunch（2026-03-28）：Stanford study outlines dangers of asking AI chatbots for personal advice",
            url: "https://techcrunch.com/2026/03/28/stanford-study-outlines-dangers-of-asking-ai-chatbots-for-personal-advice/",
          },
          {
            label: "Stanford Report（2026-03）：How AI can make us less likely to learn from our mistakes",
            url: "https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research",
          },
          {
            label: "Pew Research Center（2026-02-24）：How teens use and view AI",
            url: "https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/",
          },
        ],
        source: "TechCrunch / Stanford Report / Pew Research",
        source_url: "https://techcrunch.com/2026/03/28/stanford-study-outlines-dangers-of-asking-ai-chatbots-for-personal-advice/",
      },
      {
        slug: "ai-news-20260329-1-claude-code-75bxqy",
        title: "Claude Code自动模式进入预览",
        category: "AI新闻",
        date: "2026-03-29",
        summary: "3月24-25日两次更新连发，Claude Code从辅助写码转向连续执行任务。",
        featured: false,
        content: {
          intro:
            "过去一周（2026 年 3 月 22 日至 3 月 29 日），Claude Code 的关键变化集中在两天：3 月 24 日打通电脑接管与跨端派单，3 月 25 日自动模式进入研究预览。两次更新叠加后，产品重心开始从“辅助写代码”转向“持续完成任务”。",
          blocks: [
            {
              heading: "目录",
              paragraphs: [
                "一、自动模式上线：从“辅助写代码”走向“可连续执行”",
                "二、桌面接管与任务派单打通：执行链路开始闭环",
                "三、落地边界与企业采用门槛：能力进步与风险并存",
              ],
            },
            {
              heading: "一、自动模式上线：从“辅助写代码”走向“可连续执行”",
              paragraphs: [
                "3 月 25 日，Claude Code 的 auto mode 进入研究预览，首批面向团队计划用户开放。系统在安全层审查后可自动处理低风险步骤，减少逐步确认造成的流程中断。",
                "这次变化把交互形态从“单轮指令”推进到“多步执行”：需求拆解、改写、运行、回传可以连续发生。对开发者来说，节省的不只是输入时间，更是等待与反复确认的时间。",
                "与此同时，权限边界仍是硬前提。自动执行并非全放开机制，而是按风险等级逐层放权，重点目标是提高吞吐而不是牺牲可控性。",
              ],
            },
            {
              heading: "二、桌面接管与任务派单打通：执行链路开始闭环",
              paragraphs: [
                "时间回到 3 月 24 日，电脑接管能力与 Dispatch 派单机制被放进同一工作流：任务可在手机端发起，由桌面端继续执行，再回传进度和结果。",
                "执行路径因此形成闭环。过去分散在多个工具里的“下发指令、操作界面、调用工具、回传结果”被串成一条链，对长时任务和跨地协作更友好。",
                "当前可用范围也很明确：优先面向 Pro/Max 与 macOS 桌面端，Windows 版本仍在后续计划内。平台覆盖尚未齐平，是这阶段最直观的限制条件。",
              ],
            },
            {
              heading: "三、落地边界与企业采用门槛：能力进步与风险并存",
              paragraphs: [
                "两次更新共同指向一个变化：评价标准正在从“生成质量”转向“执行可靠性”。企业看重的不再只是会不会写代码，而是能否稳定跑完整条任务链。",
                "现实门槛同样清晰。复杂网页与多步骤任务中，速度波动和误操作仍可能出现；一旦缺少细粒度权限、异常回滚和过程审计，自动模式的效率收益会被故障成本反噬。",
                "因此，短期竞争焦点不在参数，而在工程化能力：谁能把自动执行做得更稳、更可控，谁更可能率先进入企业的长期生产流程。",
              ],
            },
          ],
        },
        references: [
          {
            label: "新浪网（网易科技，2026-03-25）",
            url: "https://k.sina.com.cn/article_5953741034_162dee0ea06703dwdo.html?from=tech",
          },
          {
            label: "TechWeb（新浪科技转载，2026-03-24）",
            url: "https://finance.sina.com.cn/tech/roll/2026-03-24/doc-inhsarqu1746363.shtml",
          },
          {
            label: "凤凰网科技（智东西，2026-03-24）",
            url: "https://tech.ifeng.com/c/8rktLuQIXIl",
          },
        ],
        source: "新浪网（网易科技）/ TechWeb / 凤凰网智东西",
        source_url: "https://k.sina.com.cn/article_5953741034_162dee0ea06703dwdo.html?from=tech",
      },
      {
        slug: "ai-news-20260326-2-ai-9uzz2d",
        title: "AI智能体进驻一线业务",
        category: "AI新闻",
        date: "2026-03-26",
        summary: "客服与销售开始规模化接入AI智能体，企业把可回滚、可审计和监控能力放在首位。",
        featured: false,
        content: {
          intro:
            "本周多家企业在客服和销售场景上线了面向真实用户的 AI 智能体，不再停留在内部演示。项目负责人普遍把“可回滚、可审计、可监控”作为第一优先级，而不是单次回答的惊艳程度。",
          blocks: [
            {
              heading: "部署方式",
              paragraphs: [
                "在落地方式上，团队通常采用“规则系统 + 模型决策”的双轨结构：高风险动作由规则层兜底，模型负责检索、归纳和对话。这样可以在保证体验的同时，把误操作风险控制在可接受范围内。",
              ],
            },
            {
              heading: "关键结论",
              paragraphs: [
                "企业侧反馈显示，真正影响效果的并不是模型参数规模，而是业务知识接入质量、权限边界定义和异常处理流程。能够把这些基础能力跑通的团队，才更容易实现稳定的成本下降和效率提升。",
              ],
            },
          ],
        },
        source: "Signal Fold 编辑部",
        source_url: "https://example.com/ai-news-1",
      },
      {
        slug: "ai-news-20260324-3-article-ga4437",
        title: "推理算力成采购新焦点",
        category: "AI新闻",
        date: "2026-03-24",
        summary: "训练扩容放缓，预算转向推理效率与单位成本，基础设施进入长期运营比拼。",
        featured: false,
        content: {
          intro:
            "今年一季度，多家云厂商和大型应用公司把新增预算从“训练集群扩容”转向“推理集群优化”。核心目标是降低单位请求成本，并提升高峰时段的响应稳定性。",
          blocks: [
            {
              heading: "采购指标变化",
              paragraphs: [
                "采购决策也更加偏向长期运营指标，例如每千次请求成本、缓存命中率、模型切换时延和灰度发布成功率。相比过去只看峰值性能，现在更强调全链路可观测和可运维性。",
              ],
            },
            {
              heading: "行业影响",
              paragraphs: [
                "行业分析认为，这种变化意味着 AI 基础设施进入“运营效率竞争”阶段。能在推理侧实现更高吞吐和更低故障率的团队，将在商业化落地上获得更明显优势。",
              ],
            },
          ],
        },
        source: "Infra Watch",
        source_url: "https://example.com/ai-news-2",
      },
      {
        slug: "ai-news-20260322-4-article-16bf5im",
        title: "开源模型加速应用普及",
        category: "AI新闻",
        date: "2026-03-22",
        summary: "模型可得性提升后，竞争重心转向流程设计、数据治理与场景化体验。",
        featured: false,
        content: {
          intro:
            "开源模型社区在最近几个月保持高频更新，围绕长上下文、工具调用和指令跟随能力持续改进。对中小团队而言，获得“够用且可定制”的模型方案变得更容易。",
          blocks: [
            {
              heading: "竞争重心迁移",
              paragraphs: [
                "随着模型可得性提升，产品差异化不再主要来自底层模型本身，而是来自流程设计、数据治理和交互体验。谁能把业务知识沉淀成稳定流程，谁就更容易形成壁垒。",
              ],
            },
            {
              heading: "实践趋势",
              paragraphs: [
                "不少团队已从“追最新模型”转为“按任务选模型”，在成本、速度和效果之间做组合优化。这种工程化思路正在成为行业默认做法。",
              ],
            },
          ],
        },
        source: "Tech Field Notes",
        source_url: "https://example.com/ai-news-3",
      },
    ],
  },
  {
    id: "ai-guide",
    title: "AI使用教程",
    items: [
      {
        title: "个人AI新闻流实战指南",
        category: "AI使用教程",
        date: "2026-03-25",
        summary: "从信息源分层、提示词模板到发布复核，搭建可持续的个人内容生产流程。",
        featured: false,
        content: {
          intro:
            "第一步先明确信息源边界，把资讯渠道分成“官方公告、行业媒体、社区讨论”三类，并为每类设置固定采集时间。这样可以减少无效浏览，保证输入质量。",
          blocks: [
            {
              heading: "模板固化",
              paragraphs: [
                "第二步是建立统一提示词模板，要求模型输出来源、关键结论、潜在偏差和可验证点。模板固定后，内容生产会从“临场发挥”变成“流程执行”。",
              ],
            },
            {
              heading: "发布前复核",
              paragraphs: [
                "第三步加入人工复核清单，包括事实核对、措辞风险和发布时间窗口。通过“机器初稿 + 人工校对”的模式，个人创作者也能稳定产出高质量内容。",
              ],
            },
          ],
        },
        source: "Boke Lab",
        source_url: "https://example.com/ai-guide-1",
      },
      {
        title: "会议纪要自动化落地法",
        category: "AI使用教程",
        date: "2026-03-23",
        summary: "用结构化提示词统一纪要格式，自动提取负责人和截止时间，提升协作追踪效率。",
        featured: false,
        content: {
          intro:
            "会议纪要场景的关键不是“写得像人”，而是“结构一致、可追踪”。建议固定输出为：结论、行动项、负责人、截止时间、阻塞风险五个模块。",
          blocks: [
            {
              heading: "产出流程",
              paragraphs: [
                "在实践中，可先让模型基于录音转写生成初稿，再由主持人快速补充上下文和优先级。这样既能减少整理时间，也能避免信息丢失。",
              ],
            },
            {
              heading: "跟踪机制",
              paragraphs: [
                "行动项跟踪建议接入表格或任务系统，按周回顾完成率与延期原因。持续复盘后，团队会逐步形成更清晰的协作节奏。",
              ],
            },
          ],
        },
        source: "Workflow Journal",
        source_url: "https://example.com/ai-guide-2",
      },
      {
        title: "高质量提示词五步法",
        category: "AI使用教程",
        date: "2026-03-21",
        summary: "明确目标、补齐上下文、约束输出并设验收标准，显著降低无效生成与返工。",
        featured: false,
        content: {
          intro:
            "第一步先写清任务目标和使用场景，避免把多个目标塞进同一条提示词。目标越具体，模型输出越稳定。",
          blocks: [
            {
              heading: "边界约束",
              paragraphs: [
                "第二步提供必要上下文与边界条件，例如受众、语气、禁用内容和引用要求。边界清楚后，返工率会明显下降。",
              ],
            },
            {
              heading: "验收标准",
              paragraphs: [
                "第三步定义输出结构和验收标准，比如字段顺序、字数范围和质量检查项。最后通过小样本迭代持续修正，形成可复用模板库。",
              ],
            },
          ],
        },
        source: "Prompt Practice",
        source_url: "https://example.com/ai-guide-3",
      },
    ],
  },
  {
    id: "open-source",
    title: "开源项目",
    items: [
      {
        title: "本地RAG最小模板发布",
        category: "开源项目",
        date: "2026-03-26",
        summary: "开箱覆盖切分、向量检索与问答接口，适合作为内部知识库原型起点。",
        featured: false,
        content: {
          intro:
            "该模板聚焦“本地可跑通”与“依赖最少”，默认提供文档导入、切分、向量化、检索与问答五个基础模块，适合作为内部知识库原型的起点。",
          blocks: [
            {
              heading: "可替换设计",
              paragraphs: [
                "项目结构按职责拆分，便于替换组件：你可以独立更换嵌入模型、向量数据库或重排策略，而不需要重写整条链路。",
              ],
            },
            {
              heading: "落地建议",
              paragraphs: [
                "维护者建议先用小规模文档验证召回质量，再逐步扩大数据量并加入监控指标，这样能更快定位性能瓶颈和答案偏差。",
              ],
            },
          ],
        },
        source: "GitHub",
        source_url: "https://example.com/open-source-1",
      },
      {
        title: "AI代理编排脚手架开源",
        category: "开源项目",
        date: "2026-03-24",
        summary: "支持任务拆分、状态追踪与失败重试，便于快速搭建可回放的自动化流程。",
        featured: false,
        content: {
          intro:
            "这个脚手架提供任务分解、状态机调度和失败重试机制，适合搭建“多步骤、可回放”的代理流程。开发者可以清晰看到每一步的输入、输出和耗时。",
          blocks: [
            {
              heading: "风险控制",
              paragraphs: [
                "框架内置了人工接管节点，当模型置信度不足或触发高风险动作时，流程会自动转入人工审批，降低自动化系统的事故概率。",
              ],
            },
            {
              heading: "实施路径",
              paragraphs: [
                "实际使用中，团队通常先从 2 到 3 步的简单流程开始，跑通后再增加分支和工具调用，避免一次性把系统复杂度拉满。",
              ],
            },
          ],
        },
        source: "GitHub",
        source_url: "https://example.com/open-source-2",
      },
      {
        title: "中文提示词评测集上线",
        category: "开源项目",
        date: "2026-03-20",
        summary: "覆盖摘要改写与问答任务，帮助团队评估模板稳定性并沉淀可复用资产。",
        featured: false,
        content: {
          intro:
            "该评测集覆盖摘要、改写、信息抽取和问答等常见任务，重点关注中文语境下的稳定性差异。每个样本都提供了可复现的评分维度和参考输出。",
          blocks: [
            {
              heading: "评测维度",
              paragraphs: [
                "相比只看单次效果，这套评测更强调“多轮、多模型、多温度”的一致性表现，有助于识别提示词在真实生产环境中的波动风险。",
              ],
            },
            {
              heading: "团队价值",
              paragraphs: [
                "对于内容团队和应用团队来说，这类基准可以帮助快速筛选可复用模板，把经验从个人技巧沉淀为团队资产。",
              ],
            },
          ],
        },
        source: "Open Dataset Hub",
        source_url: "https://example.com/open-source-3",
      },
    ],
  },
];

const sectionLabels = {
  "ai-news": "AI NEWS",
  "ai-guide": "AI GUIDES",
  "open-source": "OPEN SOURCE",
};

const allowedCategories = ["AI新闻", "AI使用教程", "开源项目"];

const inferSiteBasePath = () => {
  if (typeof window === "undefined" || !window.location) {
    return "";
  }
  if (!window.location.hostname.endsWith("github.io")) {
    return "";
  }
  const parts = String(window.location.pathname || "/")
    .split("/")
    .filter(Boolean);
  if (parts.length === 0) {
    return "";
  }
  const first = parts[0];
  if (first === "articles" || first === "sections") {
    return "";
  }
  return `/${first}`;
};

const SITE_BASE_PATH = inferSiteBasePath();

const withBasePath = (pathname = "/") => {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (!SITE_BASE_PATH) {
    return cleanPath;
  }
  return `${SITE_BASE_PATH}${cleanPath}`;
};

const today = new Date();
const todayText = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(2, "0")}-${`${today.getDate()}`.padStart(2, "0")}`;

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char];
  });

const sanitizeUrl = (value) => {
  if (typeof value !== "string") {
    return "#";
  }
  try {
    const parsed = new URL(value, window.location.origin);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.href;
    }
  } catch {
    return "#";
  }
  return "#";
};

const sanitizeSectionId = (value = "") => {
  const normalized = String(value).toLowerCase().replace(/[^a-z0-9_-]/g, "-");
  return normalized || "section";
};

const formatDate = (value) => {
  if (typeof value !== "string") {
    return todayText;
  }
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return todayText;
  }
  return `${match[1]}-${match[2]}-${match[3]}`;
};

const normalizeCategory = (value, fallback = "") => {
  const category = typeof value === "string" ? value.trim() : "";
  if (allowedCategories.includes(category)) {
    return category;
  }
  const fallbackCategory = typeof fallback === "string" ? fallback.trim() : "";
  if (allowedCategories.includes(fallbackCategory)) {
    return fallbackCategory;
  }
  return "AI新闻";
};

const normalizeContent = (item = {}) => {
  if (item.content && typeof item.content === "object" && !Array.isArray(item.content)) {
    const intro =
      typeof item.content.intro === "string" && item.content.intro.trim().length > 0
        ? item.content.intro
        : item.summary ?? "暂无正文。";

    const blocks = Array.isArray(item.content.blocks)
      ? item.content.blocks
          .map((block) => {
            if (!block || typeof block !== "object") {
              return null;
            }
            const heading =
              typeof block.heading === "string" && block.heading.trim().length > 0
                ? block.heading
                : "小标题";
            const paragraphs = Array.isArray(block.paragraphs)
              ? block.paragraphs.filter((paragraph) => typeof paragraph === "string" && paragraph.trim().length > 0)
              : [];
            if (paragraphs.length === 0) {
              return null;
            }
            return { heading, paragraphs };
          })
          .filter(Boolean)
      : [];

    return { intro, blocks };
  }

  if (Array.isArray(item.content) && item.content.length > 0) {
    const paragraphs = item.content.filter((paragraph) => typeof paragraph === "string" && paragraph.trim().length > 0);
    const [intro, ...rest] = paragraphs;
    return {
      intro: intro ?? item.summary ?? "暂无正文。",
      blocks: rest.length > 0 ? [{ heading: "正文", paragraphs: rest }] : [],
    };
  }

  return { intro: item.summary ?? "暂无正文。", blocks: [] };
};

const sanitizeItem = (item = {}, fallbackCategory = "") => {
  const normalizedContent = normalizeContent(item);
  const references = Array.isArray(item.references)
    ? item.references
        .map((reference) => {
          if (!reference || typeof reference !== "object") {
            return null;
          }
          const label =
            typeof reference.label === "string" && reference.label.trim().length > 0 ? reference.label : "来源链接";
          const url = sanitizeUrl(reference.url);
          if (url === "#") {
            return null;
          }
          return {
            label: escapeHtml(label),
            url,
          };
        })
        .filter(Boolean)
    : [];

  return {
    title: escapeHtml(item.title ?? "暂无标题"),
    category: escapeHtml(normalizeCategory(item.category, fallbackCategory)),
    date: formatDate(item.date),
    summary: escapeHtml(item.summary ?? ""),
    featured: item.featured === true,
    content: {
      intro: escapeHtml(normalizedContent.intro),
      blocks: normalizedContent.blocks.map((block) => ({
        heading: escapeHtml(block.heading),
        paragraphs: block.paragraphs.map((paragraph) => escapeHtml(paragraph)),
      })),
    },
    source: escapeHtml(item.source ?? "未知来源"),
    source_url: sanitizeUrl(item.source_url ?? item.url),
    references,
  };
};

const emptyItem = {
  title: "暂无内容",
  category: "AI新闻",
  date: todayText,
  summary: "该栏目暂未更新。",
  featured: false,
  content: {
    intro: "该栏目暂未更新。",
    blocks: [],
  },
  source: "寂川日报",
  source_url: "#",
  references: [],
};

const getSectionItems = (section) => (section && Array.isArray(section.items) ? section.items : []);

const getFrontLeadData = (section) => {
  const items = getSectionItems(section);
  const firstItem = items[0];
  if (!section || !firstItem) {
    return {
      href: "#",
      item: sanitizeItem(emptyItem, section?.title ?? ""),
    };
  }
  return {
    href: buildArticleHref(section.id, 0, firstItem),
    item: sanitizeItem(firstItem, section.title),
  };
};

const findMainStoryRecord = () => {
  let fallback = null;
  for (const section of sections) {
    const items = getSectionItems(section);
    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      if (!item) {
        continue;
      }
      if (!fallback) {
        fallback = { section, item, index };
      }
      if (item.featured === true) {
        return { section, item, index };
      }
    }
  }
  return fallback;
};

const createSlugSeed = (value = "") => {
  let hash = 0;
  for (const char of String(value)) {
    hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  }
  return hash.toString(36);
};

const slugifyTitle = (value = "") => {
  const normalized = String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || "article";
};

const buildArticleSlug = (sectionId, index, item = {}) => {
  if (item && typeof item.slug === "string") {
    const explicitSlug = item.slug.trim();
    if (explicitSlug.length > 0) {
      return explicitSlug;
    }
  }
  const sectionToken = sanitizeSectionId(sectionId);
  const dateToken = formatDate(item.date).replace(/-/g, "");
  const titleToken = slugifyTitle(item.title).slice(0, 40);
  const seed = createSlugSeed(`${sectionToken}-${dateToken}-${index}-${item.title ?? ""}`);
  return `${sectionToken}-${dateToken}-${index + 1}-${titleToken}-${seed}`;
};

const buildArticleHref = (sectionId, index, item = {}) => withBasePath(`/articles/${buildArticleSlug(sectionId, index, item)}.html`);

const buildDetailHash = (sectionId, index) => `#detail-${encodeURIComponent(sectionId)}-${index}`;

const parseDetailHash = (hash) => {
  if (typeof hash !== "string") {
    return null;
  }
  const match = hash.match(/^#detail-(.+)-(\d+)$/);
  if (!match) {
    return null;
  }
  try {
    const sectionId = decodeURIComponent(match[1]);
    const index = Number.parseInt(match[2], 10);
    if (!Number.isInteger(index) || index < 0) {
      return null;
    }
    return { sectionId, index };
  } catch {
    return null;
  }
};

const findArticleByRoute = (route) => {
  if (!route) {
    return null;
  }
  const section = sections.find((entry) => entry.id === route.sectionId);
  if (!section) {
    return null;
  }
  const items = getSectionItems(section);
  const item = items[route.index];
  if (!item) {
    return null;
  }
  return { section, item, index: route.index };
};

const renderNav = () => {
  const items = sections
    .map((section) => {
      const sectionId = sanitizeSectionId(section.id);
      const sectionTitle = escapeHtml(section.title ?? "未命名栏目");
      return `<li><a href="${withBasePath(`/sections/${sectionId}.html`)}">${sectionTitle}</a></li>`;
    })
    .join("");
  return `<nav class="top-nav" aria-label="栏目导航"><ul>${items}</ul></nav>`;
};

const renderLead = (sectionId, sectionCategory, item, index) => {
  const safeItem = sanitizeItem(item, sectionCategory);
  const detailHref = buildArticleHref(sectionId, index, item);
  return `
    <article class="lead-story">
      <h3><a href="${detailHref}">${safeItem.title}</a></h3>
      <p class="meta">发布日期：<time datetime="${safeItem.date}">${safeItem.date}</time> ｜ 来源：${safeItem.source}</p>
      <p class="summary">${safeItem.summary}</p>
    </article>
  `;
};

const renderList = (sectionId, sectionCategory, items, startIndex = 0) => {
  const html = items
    .map((item, idx) => {
      const safeItem = sanitizeItem(item, sectionCategory);
      const detailHref = buildArticleHref(sectionId, startIndex + idx, item);
      return `
        <li>
          <article>
            <h4><a href="${detailHref}">${safeItem.title}</a></h4>
            <p class="meta">发布日期：<time datetime="${safeItem.date}">${safeItem.date}</time> ｜ 来源：${safeItem.source}</p>
            <p class="summary">${safeItem.summary}</p>
          </article>
        </li>
      `;
    })
    .join("");

  return `<ul class="story-list">${html}</ul>`;
};

const renderSection = (section) => {
  const sectionId = sanitizeSectionId(section.id);
  const sectionTitle = escapeHtml(section.title ?? "未命名栏目");
  const items = getSectionItems(section);
  const [lead, ...rest] = items;
  const sectionLabel = escapeHtml(sectionLabels[section.id] || "SECTION");
  return `
    <section class="news-section" id="${sectionId}" aria-labelledby="title-${sectionId}">
      <header class="section-head">
        <p class="section-label">${sectionLabel}</p>
        <h2 id="title-${sectionId}">${sectionTitle}</h2>
      </header>
      <div class="section-grid">
        ${lead ? `${renderLead(section.id, section.title, lead, 0)}${renderList(section.id, section.title, rest, 1)}` : `<p class="empty-state">本栏目暂时没有内容。</p>`}
      </div>
    </section>
  `;
};

const renderFrontPage = () => {
  const guideLeadData = getFrontLeadData(sections.find((section) => section.id === "ai-guide"));
  const openLeadData = getFrontLeadData(sections.find((section) => section.id === "open-source"));
  const mainStory = findMainStoryRecord();
  const mainStoryData = mainStory
    ? {
        href: buildArticleHref(mainStory.section.id, mainStory.index, mainStory.item),
        item: sanitizeItem(mainStory.item, mainStory.section.title),
      }
    : {
        href: "#",
        item: sanitizeItem(emptyItem),
      };

  return `
    <section class="front-page" aria-labelledby="front-page-title">
      <h2 id="front-page-title" class="visually-hidden">头版要闻</h2>
      <div class="front-grid">
        <aside class="front-col front-col-left">
          <p class="front-kicker">Left Column</p>
          <h3><a href="${guideLeadData.href}">${guideLeadData.item.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${guideLeadData.item.date}">${guideLeadData.item.date}</time> ｜ 来源：${guideLeadData.item.source}</p>
          <p class="summary">${guideLeadData.item.summary}</p>
        </aside>
        <article class="front-main">
          <p class="front-kicker">Main Story</p>
          <h3><a href="${mainStoryData.href}">${mainStoryData.item.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${mainStoryData.item.date}">${mainStoryData.item.date}</time> ｜ 来源：${mainStoryData.item.source}</p>
          <p class="summary">${mainStoryData.item.summary}</p>
        </article>
        <aside class="front-col front-col-right">
          <p class="front-kicker">Right Column</p>
          <h3><a href="${openLeadData.href}">${openLeadData.item.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${openLeadData.item.date}">${openLeadData.item.date}</time> ｜ 来源：${openLeadData.item.source}</p>
          <p class="summary">${openLeadData.item.summary}</p>
        </aside>
      </div>
    </section>
  `;
};

const renderHomePage = () => {
  const sectionHtml = sections.map(renderSection).join("");
  return `
    <header class="masthead">
      <p class="edition">JICHUAN DAILY</p>
      <h1>寂川日报</h1>
      <p class="deck">AI news, practical guides, and open-source intelligence.</p>
      <p class="issue-meta">${todayText} ｜ WSJ Direction</p>
      ${renderNav()}
    </header>
    <main>
      ${renderFrontPage()}
      ${sectionHtml}
    </main>
    <footer>
      <p>改版说明：保留三栏目，采用更接近 WSJ 的极简新闻排版。</p>
    </footer>
  `;
};

const renderDetailNotFound = () => `
  <main class="detail-main">
    <article class="detail-article">
      <h2 class="detail-title">内容不存在</h2>
      <p class="summary">这条详情可能已被删除，或链接地址不正确。</p>
    </article>
  </main>
`;

const renderDetailPage = (record) => {
  if (!record) {
    return renderDetailNotFound();
  }
  const safeItem = sanitizeItem(record.item, record.section.title);
  const sourceLink =
    safeItem.source_url === "#"
      ? ""
      : `<p class="detail-source-link"><a href="${safeItem.source_url}" target="_blank" rel="noopener noreferrer">查看原始来源</a></p>`;
  const sourcesListHtml =
    safeItem.references.length > 0
      ? `
        <section class="detail-block">
          <h3 class="detail-subtitle">信息来源</h3>
          <ul class="detail-sources">
            ${safeItem.references
              .map((reference) => `<li><a href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.label}</a></li>`)
              .join("")}
          </ul>
        </section>
      `
      : "";
  const detailBlocksHtml = safeItem.content.blocks
    .map(
      (block) => `
        <section class="detail-block">
          <h3 class="detail-subtitle">${block.heading}</h3>
          ${block.paragraphs.map((paragraph) => `<p class="detail-body">${paragraph}</p>`).join("")}
        </section>
      `,
    )
    .join("");

  return `
    <main class="detail-main">
      <article class="detail-article">
        <h2 class="detail-title">${safeItem.title}</h2>
        <p class="meta">分类：${safeItem.category} ｜ 发布日期：<time datetime="${safeItem.date}">${safeItem.date}</time> ｜ 来源：${safeItem.source}</p>
        <p class="detail-intro">${safeItem.content.intro}</p>
        ${detailBlocksHtml}
        ${sourcesListHtml}
        ${sourceLink}
      </article>
    </main>
  `;
};

const renderApp = () => {
  const app = document.querySelector("#app");
  if (!app) {
    return;
  }

  const hash = window.location.hash || "";
  const detailRoute = parseDetailHash(hash);

  if (detailRoute) {
    app.innerHTML = renderDetailPage(findArticleByRoute(detailRoute));
    return;
  }

  app.innerHTML = renderHomePage();

  if (hash.startsWith("#") && hash.length > 1) {
    const targetId = hash.slice(1);
    if (!targetId.startsWith("detail-")) {
      const target = document.getElementById(targetId);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    sections,
    sectionLabels,
    sanitizeSectionId,
    formatDate,
    buildArticleSlug,
    todayText,
  };
}

if (typeof window !== "undefined") {
  window.addEventListener("hashchange", renderApp);
  renderApp();
}
