jQuery("#simulation")
  .on("variablechange.jim", ".m-08e126e3-df91-474c-bd94-371f681846c2 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-08e126e3-Text_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Chosen Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-08e126e3-Text_21" ],
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