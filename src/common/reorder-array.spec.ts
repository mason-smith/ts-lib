import { test, describe, expect } from 'vitest';

import { reorderArray } from './reorder-array';
import { columns } from './__mocks__/columns';
import { reorderedColumns } from './__mocks__/reorderedColumns';

type Column = { id: string; title: string };

describe('add', () => {
  test('should reorder the original array given a sorted array', () => {
    expect(reorderArray<Column, Column>(columns, reorderedColumns)).toEqual({
      reorderedArray: [
        {
          id: 'image',
          title: 'Image',
        },
        {
          id: 'name',
          title: 'Name',
        },
        {
          title: 'search-field',
          id: 'searchField',
        },
        {
          title: 'Color',
          id: 'colorways',
        },
        {
          title: 'Size Spec Range',
          id: 'sizes',
        },
        {
          title: 'Country of Origin',
          id: 'customfield.5e74e8b1b664e70032e9a62d',
        },
        {
          title: 'Test ignore',
          id: 'Test ignore',
        },
        {
          title: 'Designer',
          id: 'customfield.5e74e872b664e70032e9a628',
        },
      ],
    });
    expect(
      reorderArray<Column, Column>(columns, [
        ...reorderedColumns,
        {
          id: 'name',
          title: 'Name',
        },
      ]),
    ).toEqual({
      reorderedArray: [
        {
          id: 'image',
          title: 'Image',
        },
        {
          title: 'Country of Origin',
          id: 'customfield.5e74e8b1b664e70032e9a62d',
        },

        {
          title: 'search-field',
          id: 'searchField',
        },
        {
          title: 'Color',
          id: 'colorways',
        },
        {
          title: 'Size Spec Range',
          id: 'sizes',
        },
        {
          title: 'Designer',
          id: 'customfield.5e74e872b664e70032e9a628',
        },
        {
          title: 'Test ignore',
          id: 'Test ignore',
        },
        {
          id: 'name',
          title: 'Name',
        },
      ],
    });
    expect(
      reorderArray<Column, Column>(
        [
          { id: '1', title: 'one' },
          { id: '4', title: 'four' },
          { id: '3', title: 'three' },
          { id: '2', title: 'two' },
          { id: '5', title: 'five' },
        ],
        [
          { id: '2', title: 'two' },
          { id: '4', title: 'four' },
        ],
      ),
    ).toEqual({
      reorderedArray: [
        { id: '1', title: 'one' },
        { id: '2', title: 'two' },
        { id: '3', title: 'three' },
        { id: '4', title: 'four' },
        { id: '5', title: 'five' },
      ],
    });

    expect(
      reorderArray<Column, Column>(
        [
          { id: '1', title: 'one' },
          { id: '4', title: 'four' },
          { id: '3', title: 'three' },
          { id: '2', title: 'two' },
          { id: '6', title: 'six' },
          { id: '5', title: 'five' },
        ],
        [
          { id: '2', title: 'two' },
          { id: '4', title: 'four' },
          { id: '5', title: 'five' },
          { id: '6', title: 'six' },
        ],
      ),
    ).toEqual({
      reorderedArray: [
        { id: '1', title: 'one' },
        { id: '2', title: 'two' },
        { id: '3', title: 'three' },
        { id: '4', title: 'four' },
        { id: '5', title: 'five' },
        { id: '6', title: 'six' },
      ],
    });
  });

  test('should reorder the original array given an empty sorted array', () => {
    expect(reorderArray<Column, Column>(columns, [])).toEqual({
      reorderedArray: [
        {
          id: 'image',
          title: 'Image',
        },
        {
          id: 'name',
          title: 'Name',
        },
        {
          title: 'search-field',
          id: 'searchField',
        },
        {
          title: 'Color',
          id: 'colorways',
        },
        {
          title: 'Size Spec Range',
          id: 'sizes',
        },
        {
          title: 'Designer',
          id: 'customfield.5e74e872b664e70032e9a628',
        },
        {
          title: 'Test ignore',
          id: 'Test ignore',
        },
        {
          title: 'Country of Origin',
          id: 'customfield.5e74e8b1b664e70032e9a62d',
        },
      ],
    });
  });
  test('should reorder the original array given an invalid sorted array', () => {
    expect(reorderArray<Column, Column>(columns, [{ id: 'invalid', title: 'invalid' }])).toEqual({
      reorderedArray: [
        {
          id: 'image',
          title: 'Image',
        },
        {
          id: 'name',
          title: 'Name',
        },
        {
          title: 'search-field',
          id: 'searchField',
        },
        {
          title: 'Color',
          id: 'colorways',
        },
        {
          title: 'Size Spec Range',
          id: 'sizes',
        },
        {
          title: 'Designer',
          id: 'customfield.5e74e872b664e70032e9a628',
        },
        {
          title: 'Test ignore',
          id: 'Test ignore',
        },
        {
          title: 'Country of Origin',
          id: 'customfield.5e74e8b1b664e70032e9a62d',
        },
      ],
    });
  });
});
