jQuery("#simulation")
  .on("click", ".s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Status"
                },"S1R0" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ddf389c0-025e-458b-9276-803c5e3b5137",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Status"
                },"S1R0.5" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5414c1e3-f49d-4e13-aa63-e54868451dd1",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Status"
                },"S1R1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e8f2c2ae-2540-43f4-bae9-1c60a2c5b760",
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0070BA",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#0070BA",
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
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Text_21 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Rectangle_6": {
                      "attributes-ie": {
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
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Text_22 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Valerie User Control" ],
                    "value": "leader"
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
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Rectangle_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#0070BA",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Rectangle_6": {
                      "attributes-ie": {
                        "-pie-background": "#0070BA",
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
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Text_22 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Rectangle_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Rectangle_5": {
                      "attributes-ie": {
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
                    "#s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 #s-Text_21 span": {
                      "attributes": {
                        "color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Valerie User Control" ],
                    "value": "kick"
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
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/482dec22-2db2-44ca-9720-b0c518781288"
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Valerie User Control"
                },"kick" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "No. of Netflix Members" ],
                    "value": "4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c484915a-1936-459b-8386-713637897cbf"
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
  .on("pageload", ".s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_15" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Text_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_17" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Text_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_18" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Text_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_20" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Confirm_Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Valerie User Control"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Confirm_Button_6" ]
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
  .on("variablechange.jim", ".s-6a3b22e4-4ec7-4794-b907-dcf9ad96ae68 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_15" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Text_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_17" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Text_18")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_18" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Text_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_20" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Valerie User Control") && {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Valerie User Control"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Hotspot_5","#s-Confirm_Button_6" ]
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