export const SERVER_DATA = [
  {
    name: 'lbltext1',
    type: 'span',
    props: {
      text: 'Zone 1'
      },
    ui: {
      viewMode: {
        advance: {
          div: ['col-md-12', 'text-center']
        }
      },
      description: 'BASE INSPECTION',
      class: ['h1', 'text-center'],
    }
  },
  {
    name: 'lbltext2',
    type: 'span',
    props: {
      text: 'BASE INSPECTION'
      },
    ui: {
      hide: true,
      viewMode: {
        advance: {
          div: ['h1', 'col-md-12', 'text-center']
        }
      },
      description: 'RoofLine'
    }
  },
  {
    name: 'lbltext3',
    type: 'span',
    props: {
      text: 'Property Specific'
      },
    ui: {
      hide: true,
      viewMode: {
        advance: {
          div: ['h1', 'text-center', 'col-md-12']
        }
      }
    }
  },
  {
    name: 'uploadbtn1',
    type: 'button',
    modelName: 'userModel',
    zone: 'Zone 1',
    category: 'RoofLine',
    metatags: '[Wood Siding, Trees Adjacent Roof, Concrete Foundation, Sidewalk, Composite Roof]',
    events: {
      click: 'uploadbtn1'
    },
    ui: {
      viewMode: {
        advance: {
            div: ['col-xs-6']
        }
      },
      description: 'RoofLine',
      class: ['btn-circle', 'btn-primary' , 'text-center', 'bi', 'bi-camera'],
    }
  },
  {
    name: 'uploadbtn2',
    type: 'button',
    modelName: 'userModel',
    zone: 'Zone 1',
    category: 'Dwelling',
    events: {
      click: 'uploadbtn2click'
    },
    ui: {
      viewMode: {
        advance: {
            div: ['col-xs-6']
        }
      },
      description: 'Dwelling',
      class: ['btn-circle', 'btn-primary' , 'text-center', 'bi', 'bi-camera'],
    }
  },
  {
    name: 'uploadbtn3',
    type: 'button',
    modelName: 'userModel',
    events: {
      click: 'uploadbtn3'
    },
    ui: {
      viewMode: {
        advance: {
            div: ['col-xs-6']
        }
      },
      description: 'Property Specific',
      class: ['btn-circle', 'btn-warning' , 'text-center', 'bi', 'bi-plus'],
    }
  },
  {
    name: 'file1',
    type: 'button',
    modelName: 'userModel',
    events: {
      click: 'file1'
    },
    ui: {
      hide: true,
      viewMode: {
        advance: {
            div: ['col-xs-6']
        }
      },
      description: 'Add Photo',
      class: ['btn-circle', 'btn-secondary' , 'text-center', 'bi', 'bi-camera'],
    }
  },
  {
    name: 'uplfile2',
    type: 'button',
    modelName: 'userModel',
    events: {
      click: 'uplfile2'
    },
    ui: {
      hide: true,
      viewMode: {
        advance: {
            div: ['col-xs-6']
        }
      },
      description: 'Use from Existing Source',
      class: ['btn-circle', 'btn-secondary' , 'text-center', 'bi', 'bi-folder-plus'],
    }
  },
  {
    name: 'radio1',
    type: 'radio',
    value: 'No',
    source: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
    ui: {
      hide: true,
      viewMode: {
        horizontal: {
          label: ['col-sm-2'],
          div: ['col-sm-10']
        }
      },
      label: 'Are there any hazards present on the property that were not previously known?'
    },
    modelName: 'userModel'
  },
  {
    name: 'file2',
    type: 'file',
    modelName: 'userModel',
    events: {
      change: 'changeValue'
    },
    additionalConfig: {
      prop: {
        multiple: true
      }
    },
    ui: {
      hide: true,
      label: 'Upload Photo',
    }
  },
  {
    name: 'textarea2',
    type: 'textarea',
    ui: {
      hide: true,
      viewMode: {
        advance: {
          div: ['col-md-6', 'col-sm-6']
        }
      },
      label: 'Add Comments',
    }
  },
  {
    name: 'textarea3',
    type: 'textarea',
    value: '',
    ui: {
      hide: true,
      viewMode: {
        advance: {
          div: ['col-md-6', 'col-sm-6']
        }
      },
      label: 'Add Comments',
    }
  },
  {
    name: 'hobbies',
    type: 'array',
    controlConfigs: {
      name: {
        type: 'file',
        actionKeyNames: [],
        ui: {
          label: 'Profile Pic'
        }
      }
    },
    minimumRepeatCount: 1,
    rows: [
      {
        fields: [
          {
            name: 'name'
          }
        ]
      }
    ]
  }
];
