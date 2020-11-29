import { ITeam } from '../../src/types';
import { expectNotAssignable, expectAssignable } from 'tsd';

// Use these for NEGATIVE test cases
expectNotAssignable<ITeam>(null);
expectAssignable<ITeam>({ channels: [], iconUrl: '', id: '', name: '' });
