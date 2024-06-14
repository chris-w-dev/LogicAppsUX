import { List } from '@fluentui/react';
import type { TemplatesParameterUpdateEvent } from '@microsoft/designer-ui';
import { updateTemplateParameterValue } from '../../../core/state/templates/templateSlice';
import type { AppDispatch, RootState } from '../../../core/state/templates/store';
import { useDispatch, useSelector } from 'react-redux';
import { TemplatesParameterField } from '@microsoft/designer-ui';
import type { Template } from '@microsoft/logic-apps-shared';

export const DisplayParameters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { parameters } = useSelector((state: RootState) => state.template);
  const validationErrors = parameters.validationErrors;

  const onUpdateParameterValue = (event: TemplatesParameterUpdateEvent) => dispatch(updateTemplateParameterValue(event));

  const renderParameter = (item?: Template.ParameterDefinition): JSX.Element => {
    if (!item) {
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <></>;
    }

    return (
      <TemplatesParameterField
        key={item?.name}
        definition={item}
        validationError={validationErrors[item?.name ?? '']}
        onChange={onUpdateParameterValue}
        required={item?.required ?? false}
      />
    );
  };

  return <List className="msla-templates-parameters" items={Object.values(parameters.definitions)} onRenderCell={renderParameter} />;
};
0;
