import { describe, expect, it } from 'vitest';
import { ValueSegmentType } from '../../../models/parameter';
import { createLiteralValueSegment, createEmptyLiteralValueSegment, removeFirstAndLast } from '../helper';

describe('Helper functions', () => {
  it('creates a literal value segment', () => {
    const segment = createLiteralValueSegment('test', '1');
    expect(segment).toEqual({
      id: '1',
      type: ValueSegmentType.LITERAL,
      value: 'test',
    });
  });

  it('creates an empty literal value segment', () => {
    const segment = createEmptyLiteralValueSegment();
    expect(segment).toEqual({
      id: expect.any(String), // The id is generated by guid(), so we can't know its exact value
      type: ValueSegmentType.LITERAL,
      value: '',
    });
  });

  it('removes first and last characters from segments', () => {
    const segments = [
      { id: '1', type: ValueSegmentType.LITERAL, value: 'test' },
      { id: '2', type: ValueSegmentType.LITERAL, value: 'example' },
    ];
    const result = removeFirstAndLast(segments, 't', 'e');
    expect(result).toEqual([
      { id: '1', type: ValueSegmentType.LITERAL, value: 'est' },
      { id: '2', type: ValueSegmentType.LITERAL, value: 'exampl' },
    ]);
  });
});
