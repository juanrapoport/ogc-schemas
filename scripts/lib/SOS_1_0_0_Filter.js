var SOS_1_0_0_Filter_Module_Factory = function () {
  var SOS_1_0_0_Filter = {
    n: 'SOS_1_0_0_Filter',
    dens: 'http:\/\/www.opengis.net\/ogc',
    deps: ['GML_3_1_1'],
    tis: [{
        ln: 'FunctionNamesType',
        ps: [{
            n: 'functionName',
            rq: true,
            col: true,
            en: 'FunctionName',
            ti: '.FunctionNameType'
          }]
      }, {
        ln: 'FunctionType',
        bti: '.ExpressionType',
        ps: [{
            n: 'expression',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'FunctionsType',
        ps: [{
            n: 'functionNames',
            rq: true,
            en: 'FunctionNames',
            ti: '.FunctionNamesType'
          }]
      }, {
        ln: 'ScalarCapabilitiesType',
        tn: 'Scalar_CapabilitiesType',
        ps: [{
            n: 'logicalOperators',
            en: 'LogicalOperators',
            ti: '.LogicalOperators'
          }, {
            n: 'comparisonOperators',
            en: 'ComparisonOperators',
            ti: '.ComparisonOperatorsType'
          }, {
            n: 'arithmeticOperators',
            en: 'ArithmeticOperators',
            ti: '.ArithmeticOperatorsType'
          }]
      }, {
        ln: 'BinaryOperatorType',
        bti: '.ExpressionType',
        ps: [{
            n: 'expression',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'TemporalCapabilitiesType',
        tn: 'Temporal_CapabilitiesType',
        ps: [{
            n: 'temporalOperands',
            rq: true,
            en: 'TemporalOperands',
            ti: '.TemporalOperandsType'
          }, {
            n: 'temporalOperators',
            rq: true,
            en: 'TemporalOperators',
            ti: '.TemporalOperatorsType'
          }]
      }, {
        ln: 'SimpleArithmetic',
        tn: null
      }, {
        ln: 'SpatialOperatorsType',
        ps: [{
            n: 'spatialOperator',
            rq: true,
            col: true,
            en: 'SpatialOperator',
            ti: '.SpatialOperatorType'
          }]
      }, {
        ln: 'ComparisonOperatorsType',
        ps: [{
            n: 'comparisonOperator',
            rq: true,
            col: true,
            en: 'ComparisonOperator'
          }]
      }, {
        ln: 'BinaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'ops',
            rq: true,
            mno: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'spatialOps',
                ti: '.SpatialOpsType'
              }, {
                en: 'Function',
                ti: '.FunctionType'
              }, {
                en: 'logicOps',
                ti: '.LogicOpsType'
              }, {
                en: 'comparisonOps',
                ti: '.ComparisonOpsType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'FunctionNameType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'nArgs',
            rq: true,
            an: {
              lp: 'nArgs'
            },
            t: 'a'
          }]
      }, {
        ln: 'ComparisonOpsType'
      }, {
        ln: 'SpatialOpsType'
      }, {
        ln: 'TemporalOperatorsType',
        ps: [{
            n: 'temporalOperator',
            rq: true,
            col: true,
            en: 'TemporalOperator',
            ti: '.TemporalOperatorType'
          }]
      }, {
        ln: 'SpatialOperatorType',
        ps: [{
            n: 'geometryOperands',
            en: 'GeometryOperands',
            ti: '.GeometryOperandsType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'UnaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'comparisonOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'spatialOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'function',
            rq: true,
            en: 'Function',
            ti: '.FunctionType'
          }]
      }, {
        ln: 'FID',
        tn: null
      }, {
        ln: 'ExpressionType'
      }, {
        ln: 'GeometryOperandsType',
        ps: [{
            n: 'geometryOperand',
            rq: true,
            col: true,
            en: 'GeometryOperand',
            ti: 'QName'
          }]
      }, {
        ln: 'FilterType',
        ps: [{
            n: 'spatialOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'comparisonOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'id',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: '_Id',
            ti: '.AbstractIdType',
            t: 'er'
          }]
      }, {
        ln: 'GmlObjectIdType',
        bti: '.AbstractIdType',
        ps: [{
            n: 'id',
            rq: true,
            ti: 'ID',
            an: {
              lp: 'id',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }]
      }, {
        ln: 'LowerBoundaryType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'LiteralType',
        bti: '.ExpressionType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }]
      }, {
        ln: 'SortByType',
        ps: [{
            n: 'sortProperty',
            rq: true,
            col: true,
            en: 'SortProperty',
            ti: '.SortPropertyType'
          }]
      }, {
        ln: 'ArithmeticOperatorsType',
        ps: [{
            n: 'simpleArithmeticOrFunctions',
            rq: true,
            col: true,
            etis: [{
                en: 'SimpleArithmetic',
                ti: '.SimpleArithmetic'
              }, {
                en: 'Functions',
                ti: '.FunctionsType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'DistanceBufferType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: '_Geometry',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'distance',
            rq: true,
            en: 'Distance',
            ti: '.DistanceType'
          }]
      }, {
        ln: 'IdCapabilitiesType',
        tn: 'Id_CapabilitiesType',
        ps: [{
            n: 'eidOrFID',
            rq: true,
            col: true,
            etis: [{
                en: 'EID',
                ti: '.EID'
              }, {
                en: 'FID',
                ti: '.FID'
              }],
            t: 'es'
          }]
      }, {
        ln: 'SpatialCapabilitiesType',
        tn: 'Spatial_CapabilitiesType',
        ps: [{
            n: 'geometryOperands',
            rq: true,
            en: 'GeometryOperands',
            ti: '.GeometryOperandsType'
          }, {
            n: 'spatialOperators',
            rq: true,
            en: 'SpatialOperators',
            ti: '.SpatialOperatorsType'
          }]
      }, {
        ln: 'LogicOpsType'
      }, {
        ln: 'PropertyIsNullType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }]
      }, {
        ln: 'LogicalOperators',
        tn: null
      }, {
        ln: 'BBOXType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName',
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'envelope',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'Envelope',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.EnvelopeType',
            t: 'er'
          }]
      }, {
        ln: 'DistanceType',
        ps: [{
            n: 'value',
            ti: 'Double',
            t: 'v'
          }, {
            n: 'units',
            rq: true,
            an: {
              lp: 'units'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalOperandsType',
        ps: [{
            n: 'temporalOperand',
            rq: true,
            col: true,
            en: 'TemporalOperand',
            ti: 'QName'
          }]
      }, {
        ln: 'TemporalOpsType'
      }, {
        ln: 'SortPropertyType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'sortOrder',
            en: 'SortOrder'
          }]
      }, {
        ln: 'PropertyIsBetweenType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }, {
            n: 'lowerBoundary',
            rq: true,
            en: 'LowerBoundary',
            ti: '.LowerBoundaryType'
          }, {
            n: 'upperBoundary',
            rq: true,
            en: 'UpperBoundary',
            ti: '.UpperBoundaryType'
          }]
      }, {
        ln: 'BinaryComparisonOpType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }, {
            n: 'matchCase',
            ti: 'Boolean',
            an: {
              lp: 'matchCase'
            },
            t: 'a'
          }]
      }, {
        ln: 'FilterCapabilities',
        tn: null,
        ps: [{
            n: 'spatialCapabilities',
            rq: true,
            en: 'Spatial_Capabilities',
            ti: '.SpatialCapabilitiesType'
          }, {
            n: 'scalarCapabilities',
            rq: true,
            en: 'Scalar_Capabilities',
            ti: '.ScalarCapabilitiesType'
          }, {
            n: 'idCapabilities',
            rq: true,
            en: 'Id_Capabilities',
            ti: '.IdCapabilitiesType'
          }]
      }, {
        ln: 'AbstractIdType'
      }, {
        ln: 'UpperBoundaryType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'BinarySpatialOpType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName1',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'propertyName2',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: '_Geometry',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'envelope',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'Envelope',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.EnvelopeType',
            t: 'er'
          }]
      }, {
        ln: 'FeatureIdType',
        bti: '.AbstractIdType',
        ps: [{
            n: 'fid',
            rq: true,
            ti: 'ID',
            an: {
              lp: 'fid'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinaryTemporalOpType',
        bti: '.TemporalOpsType',
        ps: [{
            n: 'propertyName1',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'propertyName2',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'timeObject',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: '_TimeObject',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.AbstractTimeObjectType',
            t: 'er'
          }]
      }, {
        ln: 'EID',
        tn: null
      }, {
        ln: 'TemporalOperatorType',
        ps: [{
            n: 'temporalOperands',
            en: 'TemporalOperands',
            ti: '.TemporalOperandsType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'PropertyIsLikeType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'literal',
            rq: true,
            en: 'Literal',
            ti: '.LiteralType'
          }, {
            n: 'wildCard',
            rq: true,
            an: {
              lp: 'wildCard'
            },
            t: 'a'
          }, {
            n: 'singleChar',
            rq: true,
            an: {
              lp: 'singleChar'
            },
            t: 'a'
          }, {
            n: 'escapeChar',
            rq: true,
            an: {
              lp: 'escapeChar'
            },
            t: 'a'
          }, {
            n: 'matchCase',
            ti: 'Boolean',
            an: {
              lp: 'matchCase'
            },
            t: 'a'
          }]
      }, {
        ln: 'PropertyNameType',
        bti: '.ExpressionType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }]
      }, {
        t: 'enum',
        ln: 'TemporalOperatorNameType',
        vs: ['TM_After', 'TM_Before', 'TM_Begins', 'TM_BegunBy', 'TM_Contains', 'TM_During', 'TM_Equals', 'TM_Overlaps', 'TM_Meets', 'TM_OverlappedBy', 'TM_MetBy', 'TM_EndedBy', 'TM_Ends']
      }, {
        t: 'enum',
        ln: 'SortOrderType',
        vs: ['DESC', 'ASC']
      }, {
        t: 'enum',
        ln: 'SpatialOperatorNameType',
        vs: ['BBOX', 'Equals', 'Disjoint', 'Intersects', 'Touches', 'Crosses', 'Within', 'Contains', 'Overlaps', 'Beyond', 'DWithin']
      }, {
        t: 'enum',
        ln: 'ComparisonOperatorType',
        vs: ['LessThan', 'GreaterThan', 'LessThanEqualTo', 'GreaterThanEqualTo', 'EqualTo', 'NotEqualTo', 'Like', 'Between', 'NullCheck']
      }],
    eis: [{
        en: 'Beyond',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'Not',
        ti: '.UnaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'Disjoint',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'TM_OverlappedBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'temporalOps',
        ti: '.TemporalOpsType'
      }, {
        en: 'Div',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'PropertyIsGreaterThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Id_Capabilities',
        ti: '.IdCapabilitiesType'
      }, {
        en: 'Contains',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Intersects',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'PropertyIsLessThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'EID',
        ti: '.EID'
      }, {
        en: 'PropertyIsLessThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'PropertyIsNull',
        ti: '.PropertyIsNullType',
        sh: 'comparisonOps'
      }, {
        en: 'logicOps',
        ti: '.LogicOpsType'
      }, {
        en: 'SortBy',
        ti: '.SortByType'
      }, {
        en: 'TM_BegunBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Crosses',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Touches',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'comparisonOps',
        ti: '.ComparisonOpsType'
      }, {
        en: 'TM_Overalps',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsNotEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'And',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'Within',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'LogicalOperators',
        ti: '.LogicalOperators'
      }, {
        en: 'FID',
        ti: '.FID'
      }, {
        en: 'PropertyIsGreaterThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Overlaps',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'DWithin',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'TM_MetBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Spatial_Capabilities',
        ti: '.SpatialCapabilitiesType'
      }, {
        en: 'PropertyIsLike',
        ti: '.PropertyIsLikeType',
        sh: 'comparisonOps'
      }, {
        en: 'BBOX',
        ti: '.BBOXType',
        sh: 'spatialOps'
      }, {
        en: 'TM_Equals',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Filter',
        ti: '.FilterType'
      }, {
        en: 'SimpleArithmetic',
        ti: '.SimpleArithmetic'
      }, {
        en: 'Scalar_Capabilities',
        ti: '.ScalarCapabilitiesType'
      }, {
        en: 'PropertyName',
        ti: '.PropertyNameType',
        sh: 'expression'
      }, {
        en: 'Mul',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'Add',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'Literal',
        ti: '.LiteralType',
        sh: 'expression'
      }, {
        en: 'TM_EndedBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'TM_Meets',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Equals',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'TM_Begins',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: '_Id',
        ti: '.AbstractIdType'
      }, {
        en: 'TM_After',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'spatialOps',
        ti: '.SpatialOpsType'
      }, {
        en: 'Filter_Capabilities',
        ti: '.FilterCapabilities'
      }, {
        en: 'TM_Contains',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Temporal_Capabilities',
        ti: '.TemporalCapabilitiesType'
      }, {
        en: 'TM_Ends',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Function',
        ti: '.FunctionType',
        sh: 'expression'
      }, {
        en: 'TM_During',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Sub',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'Or',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'GmlObjectId',
        ti: '.GmlObjectIdType',
        sh: '_Id'
      }, {
        en: 'TM_Before',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'FeatureId',
        ti: '.FeatureIdType',
        sh: '_Id'
      }, {
        en: 'expression',
        ti: '.ExpressionType'
      }, {
        en: 'PropertyIsBetween',
        ti: '.PropertyIsBetweenType',
        sh: 'comparisonOps'
      }]
  };
  return {
    SOS_1_0_0_Filter: SOS_1_0_0_Filter
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SOS_1_0_0_Filter_Module_Factory);
}
else {
  var SOS_1_0_0_Filter_Module = SOS_1_0_0_Filter_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SOS_1_0_0_Filter = SOS_1_0_0_Filter_Module.SOS_1_0_0_Filter;
  }
  else {
    var SOS_1_0_0_Filter = SOS_1_0_0_Filter_Module.SOS_1_0_0_Filter;
  }
}