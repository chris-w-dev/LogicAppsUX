import { useSelector } from 'react-redux';
import type { RootState } from './store';
import type { WorkflowTemplateData } from '../../actions/bjsworkflow/templates';

export const useAreServicesInitialized = () => {
  return useSelector((state: RootState) => state.template.servicesInitialized ?? false);
};

export const useTemplateWorkflows = () => {
  return useSelector((state: RootState) => state.template.workflows ?? {});
};

export const useDefaultWorkflowTemplate = (): (WorkflowTemplateData & { id: string; }) | undefined => {
  return useSelector((state: RootState) => {
    const workflows = state.template.workflows ?? {};
    const workflowIds = Object.keys(workflows);
    return Object.keys(workflows).length > 0 ? { id: workflowIds[0], ...workflows[workflowIds[0]] } : undefined;
  });
};
