jQuery("#simulation")
  .on("click", ".s-15258e50-e4f8-4f9f-8d84-64da761b5d40 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Left_Arrow_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2f5f7ad6-9ffc-4ed3-9320-1c165f55b674"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8342722-bdd9-4d60-8628-5990c6e3b124",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3d560776-f226-4982-bd43-1e1e9d4b6071",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0070BA",
                        "background-attachment": "scroll",
                        "border-top-color": "#0070BA",
                        "border-right-color": "#0070BA",
                        "border-bottom-color": "#0070BA",
                        "border-left-color": "#0070BA"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-color": "#0070BA",
                        "border-right-color": "#0070BA",
                        "border-bottom-color": "#0070BA",
                        "border-left-color": "#0070BA",
                        "-pie-background": "#0070BA",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Category_1","#s-Text_3","#s-Rectangle_11","#s-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-color": "#EFEFEF",
                        "border-right-color": "#EFEFEF",
                        "border-bottom-color": "#EFEFEF",
                        "border-left-color": "#EFEFEF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0070BA",
                        "background-attachment": "scroll",
                        "border-top-color": "#0070BA",
                        "border-right-color": "#0070BA",
                        "border-bottom-color": "#0070BA",
                        "border-left-color": "#0070BA"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-color": "#0070BA",
                        "border-right-color": "#0070BA",
                        "border-bottom-color": "#0070BA",
                        "border-left-color": "#0070BA",
                        "-pie-background": "#0070BA",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Category_1","#s-Text_3","#s-Rectangle_11","#s-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0070BA",
                        "background-attachment": "scroll",
                        "border-top-color": "#0070BA",
                        "border-right-color": "#0070BA",
                        "border-bottom-color": "#0070BA",
                        "border-left-color": "#0070BA"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-color": "#0070BA",
                        "border-right-color": "#0070BA",
                        "border-bottom-color": "#0070BA",
                        "border-left-color": "#0070BA",
                        "-pie-background": "#0070BA",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Category_1","#s-Text_3","#s-Rectangle_11","#s-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0070BA",
                        "background-attachment": "scroll",
                        "border-top-color": "#0070BA",
                        "border-right-color": "#0070BA",
                        "border-bottom-color": "#0070BA",
                        "border-left-color": "#0070BA"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-15258e50-e4f8-4f9f-8d84-64da761b5d40 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-color": "#0070BA",
                        "border-right-color": "#0070BA",
                        "border-bottom-color": "#0070BA",
                        "border-left-color": "#0070BA",
                        "-pie-background": "#0070BA",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Category_1","#s-Text_3","#s-Rectangle_11","#s-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Type of Plan Chosen" ],
                    "value": "custom"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Type of Plan Chosen" ],
                    "value": "custom"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Ellipse_1","#s-Image_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-15258e50-e4f8-4f9f-8d84-64da761b5d40 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Type of Plan Chosen" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("variablechange.jim", ".s-15258e50-e4f8-4f9f-8d84-64da761b5d40 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Chosen Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_21" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Chosen Members"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });