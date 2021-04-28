export const SERVER_DATA_ADD = {
    data: [
      {
        name: 'plumbing_title',
        type: 'span',
        props: {
          text: 'Plumbing'
        },
        tier: 1,
        controlName: 'Plumbing',
        parent: '',
        ui: {
          viewMode: {
            advance: {
              div: ['col-md-12']
            }
          },
          description: '',
          class: ['h1', 'text-center'],
        }
      },
      {
        name: 'plumbing_kitchen_title',
        type: 'span',
        props: {
          text: 'Plumbing > Kitchen'
        },
        tier: 2,
        controlName: 'Kitchen',
        parent: 'Plumbing',
        mandatory: false,
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-md-12']
            }
          },
          class: ['h1', 'text-center'],
        }
      },
      {
        name: 'plumbing_bathroom_title',
        type: 'span',
        props: {
          text: 'Plumbing > Bathroom'
        },
        tier: 2,
        controlName: 'Bathroom',
        parent: 'Plumbing',
        mandatory: false,
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-md-12']
            }
          },
          class: ['h1', 'text-center'],
        }
      },
      {
        name: 'plumbing_bathroom_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroom'
        },
        mandatory: true,
        tier: 2,
        repeatable: 2,
        maxLimit: 5,
        controlName: 'Bathroom',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroom2_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroom2'
        },
        mandatory: false,
        tier: 2,
        controlName: 'Bathroom2',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom 2',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroom3_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroom3'
        },
        mandatory: false,
        tier: 2,
        controlName: 'Bathroom3',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom 3',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroom4_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroom4'
        },
        mandatory: false,
        tier: 2,
        controlName: 'Bathroom4',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: false,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom 4',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroom5_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroom5'
        },
        mandatory: false,
        tier: 2,
        controlName: 'Bathroom5',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom 5',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroomsink_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroomsink'
        },
        mandatory: true,
        tier: 3,
        controlName: 'BathroomSink',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathtub_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathtub'
        },
        mandatory: true,
        tier: 3,
        controlName: 'Shower_Bathtub',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Shower/Bathtub',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroomsink2_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroomsink2'
        },
        mandatory: true,
        tier: 3,
        controlName: 'bathroomsink2',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathtub2_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathtub2'
        },
        mandatory: true,
        tier: 3,
        controlName: 'Shower_Bathtub2',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Shower/Bathtub',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroomsink3_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroomsink3'
        },
        mandatory: true,
        tier: 3,
        controlName: 'bathroomsink3',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathtub3_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathtub3'
        },
        mandatory: true,
        tier: 3,
        controlName: 'Shower_bathtub3',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Shower/Bathtub',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroomsink4_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroomsink4'
        },
        mandatory: true,
        tier: 3,
        controlName: 'bathroomsink4',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathtub4_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathtub4'
        },
        mandatory: true,
        tier: 3,
        controlName: 'Shower_bathtub4',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Shower/Bathtub',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathroomsink5_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathroomsink5'
        },
        mandatory: true,
        tier: 3,
        controlName: 'bathroomsink5',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Bathroom Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_bathtub5_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_bathtub5'
        },
        mandatory: true,
        tier: 3,
        controlName: 'Shower_bathtub5',
        parent: 'Bathroom',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Shower/Bathtub',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchen_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchen'
        },
        mandatory: true,
        repeatable: 1,
        maxLimit: 5,
        tier: 2,
        controlName: 'Kitchen',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchensink_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchensink'
        },
        mandatory: true,
        tier: 3,
        controlName: 'KitchenSink',
        parent: 'Kitchen',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchensink2_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchensink2'
        },
        mandatory: true,
        tier: 3,
        controlName: 'KitchenSink2',
        parent: 'Kitchen',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchensink3_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchensink3'
        },
        mandatory: true,
        tier: 3,
        controlName: 'KitchenSink3',
        parent: 'Kitchen',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchensink4_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchensink4'
        },
        mandatory: true,
        tier: 3,
        controlName: 'KitchenSink4',
        parent: 'Kitchen',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchensink5_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchensink5'
        },
        mandatory: true,
        tier: 3,
        controlName: 'KitchenSink5',
        parent: 'Kitchen',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen Sink',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchen2_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchen2'
        },
        mandatory: false,
        tier: 2,
        controlName: 'Kitchen2',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen 2',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchen3_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchen3'
        },
        mandatory: false,
        tier: 2,
        controlName: 'Kitchen3',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen 3',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchen4_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchen4'
        },
        mandatory: false,
        tier: 2,
        controlName: 'Kitchen4',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen 4',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_kitchen5_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_kitchen5'
        },
        mandatory: false,
        tier: 2,
        controlName: 'Kitchen5',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Kitchen 5',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_heater_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_heater'
        },
        mandatory: true,
        tier: 2,
        controlName: 'WaterHeater',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Water Heater',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_dishwasher_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_dishwasher'
        },
        mandatory: true,
        tier: 2,
        controlName: 'Dishwasher',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Dishwasher',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_activeleaks_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_activeleaks'
        },
        mandatory: true,
        tier: 2,
        controlName: 'ActiveLeaks',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Active Leaks',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_priorleaks_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_priorleaks'
        },
        mandatory: true,
        tier: 2,
        controlName: 'PriorLeaks',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Prior Leaks',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_wmhose_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_wmhose'
        },
        mandatory: true,
        tier: 2,
        controlName: 'WashingMachineHose',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'WashingMachine Hose',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_addComments_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_addComments'
        },
        mandatory: true,
        tier: 2,
        controlName: 'AdditionalComments',
        parent: 'Plumbing',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          description: 'Additional Comments',
          class: ['btn-circle', 'btn-secondary', 'text-center', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'plumbing_control_add_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'plumbing_contol_add'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-xs-6']
            }
          },
          // description: 'Add Control',
          class: ['addbtn', 'btn-dark', 'text-center', 'bi', 'bi-folder-plus'],
        }
      },
    ]
  };
