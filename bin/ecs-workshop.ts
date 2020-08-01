#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { EcsWorkshopStack } from '../lib/ecs-workshop-stack';

const app = new cdk.App();
new EcsWorkshopStack(app, 'EcsWorkshopStack');
