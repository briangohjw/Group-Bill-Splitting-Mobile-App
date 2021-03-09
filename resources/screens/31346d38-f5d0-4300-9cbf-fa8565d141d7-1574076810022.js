jQuery("#simulation")
  .on("click", ".s-31346d38-f5d0-4300-9cbf-fa8565d141d7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Left_Arrow")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c87855ef-3f67-4c2f-a935-8614fbeed5f9",
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1334a6eb-a9b2-4dda-920f-5b6dcd8a45e6",
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
    }
  })
  .on("click", ".s-31346d38-f5d0-4300-9cbf-fa8565d141d7 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_3")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_16" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_16 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_16 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_16": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_15" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_15 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_15 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_15": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_14" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_14 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_14 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_14": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_6")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_13" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_13 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_13 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_13": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_7")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_7" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_7 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_7 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_7": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_8")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_8" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_8 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_8 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_8": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_9")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_9" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_9 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_9 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_9": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_10")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_10" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_10 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_10 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_10": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_11")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_11" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_11 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_11 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_11": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_12")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "condition": {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Chosen Members"
                  },"6" ]
                },
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": [ "#s-Rectangle_12" ],
                      "value": "Added!"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_12 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#999999",
                          "background-attachment": "scroll",
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_12 span": {
                        "attributes": {
                          "color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-31346d38-f5d0-4300-9cbf-fa8565d141d7 #s-Rectangle_12": {
                        "attributes-ie": {
                          "border-top-color": "#999999",
                          "border-right-color": "#999999",
                          "border-bottom-color": "#999999",
                          "border-left-color": "#999999",
                          "-pie-background": "#999999",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": [ "Chosen Members" ],
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "Chosen Members"
                        },"1" ]
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
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-31346d38-f5d0-4300-9cbf-fa8565d141d7 .pageload", function(event, data) {
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
                    "variable": [ "Chosen Members" ],
                    "value": "1"
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