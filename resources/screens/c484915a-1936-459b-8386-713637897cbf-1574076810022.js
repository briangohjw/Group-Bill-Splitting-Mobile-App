jQuery("#simulation")
  .on("click", ".s-c484915a-1936-459b-8386-713637897cbf .click", function(event, data) {
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Valerie Kicked" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3fdcc9d2-2748-4c04-a1cd-d99f96ba7ab2"
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
  .on("pageload", ".s-c484915a-1936-459b-8386-713637897cbf .pageload", function(event, data) {
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
  .on("variablechange.jim", ".s-c484915a-1936-459b-8386-713637897cbf .variablechange", function(event, data) {
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
    }
  });