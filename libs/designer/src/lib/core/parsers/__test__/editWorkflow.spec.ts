import { createWorkflowNode } from '../../utils/graph';
import { addNodeToWorkflow } from '../addNodeToWorkflow';
import type { WorkflowNode } from '../models/workflowNode';
import { initialState, mockGraph } from './mocks/workflowMock';
import { describe, vi, beforeEach, afterEach, beforeAll, afterAll, it, test, expect } from 'vitest';
describe('edit workflow', () => {
  let graph: WorkflowNode;

  const nodeToAdd = createWorkflowNode('post_in_teams');

  beforeEach(() => {
    graph = mockGraph;
  });

  // The null coalescing operators are just to avoid linting errors, all the nodes exist in the mock

  it('adds middle workflow node', () => {
    const parentId = graph?.children?.[0].id ?? '';
    const childId = graph?.children?.[1].id ?? '';

    addNodeToWorkflow(
      {
        operation: {
          type: nodeToAdd.type,
        } as any,
        nodeId: nodeToAdd.id,
        relationshipIds: {
          graphId: graph.id,
          parentId: parentId,
          childId: childId,
        },
      },
      graph,
      {} as any,
      initialState
    );

    expect(graph?.edges?.find((edge) => edge.source === parentId && edge.target === nodeToAdd.id)).toBeDefined();
    expect(graph?.edges?.find((edge) => edge.source === nodeToAdd.id && edge.target === childId)).toBeDefined();
    // edge from parent to original child should be undefined
    expect(graph?.edges?.find((edge) => edge.source === parentId && edge.target === childId)).toBeUndefined();
  });

  it('adds workflow edge to insert node as last', () => {
    const parentId = graph?.children?.[3].id ?? '';

    addNodeToWorkflow(
      {
        operation: {
          type: nodeToAdd.type,
        } as any,
        nodeId: nodeToAdd.id,
        relationshipIds: {
          graphId: graph.id,
          parentId: parentId,
          childId: undefined,
        },
      },
      graph,
      {} as any,
      initialState
    );

    expect(graph?.edges?.find((edge) => edge.source === parentId && edge.target === nodeToAdd.id)).toBeDefined();
  });
});
