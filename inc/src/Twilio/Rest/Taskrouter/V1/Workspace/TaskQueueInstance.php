<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Taskrouter\V1\Workspace;

use Twilio\Deserialize;
use Twilio\Exceptions\TwilioException;
use Twilio\InstanceResource;
use Twilio\Options;
use Twilio\Rest\Taskrouter\V1\Workspace\TaskQueue\TaskQueueCumulativeStatisticsList;
use Twilio\Rest\Taskrouter\V1\Workspace\TaskQueue\TaskQueueRealTimeStatisticsList;
use Twilio\Rest\Taskrouter\V1\Workspace\TaskQueue\TaskQueueStatisticsList;
use Twilio\Values;
use Twilio\Version;

/**
 * @property string $accountSid
 * @property string $assignmentActivitySid
 * @property string $assignmentActivityName
 * @property \DateTime $dateCreated
 * @property \DateTime $dateUpdated
 * @property string $friendlyName
 * @property int $maxReservedWorkers
 * @property string $reservationActivitySid
 * @property string $reservationActivityName
 * @property string $sid
 * @property string $targetWorkers
 * @property string $taskOrder
 * @property string $url
 * @property string $workspaceSid
 * @property array $links
 */
class TaskQueueInstance extends InstanceResource {
    protected $_statistics;
    protected $_realTimeStatistics;
    protected $_cumulativeStatistics;

    /**
     * Initialize the TaskQueueInstance
     *
     * @param Version $version Version that contains the resource
     * @param mixed[] $payload The response payload
     * @param string $workspaceSid The SID of the Workspace that contains the
     *                             TaskQueue
     * @param string $sid The SID of the resource to
     */
    public function __construct(Version $version, array $payload, string $workspaceSid, string $sid = null) {
        parent::__construct($version);

        // Marshaled Properties
        $this->properties = [
            'accountSid' => Values::array_get($payload, 'account_sid'),
            'assignmentActivitySid' => Values::array_get($payload, 'assignment_activity_sid'),
            'assignmentActivityName' => Values::array_get($payload, 'assignment_activity_name'),
            'dateCreated' => Deserialize::dateTime(Values::array_get($payload, 'date_created')),
            'dateUpdated' => Deserialize::dateTime(Values::array_get($payload, 'date_updated')),
            'friendlyName' => Values::array_get($payload, 'friendly_name'),
            'maxReservedWorkers' => Values::array_get($payload, 'max_reserved_workers'),
            'reservationActivitySid' => Values::array_get($payload, 'reservation_activity_sid'),
            'reservationActivityName' => Values::array_get($payload, 'reservation_activity_name'),
            'sid' => Values::array_get($payload, 'sid'),
            'targetWorkers' => Values::array_get($payload, 'target_workers'),
            'taskOrder' => Values::array_get($payload, 'task_order'),
            'url' => Values::array_get($payload, 'url'),
            'workspaceSid' => Values::array_get($payload, 'workspace_sid'),
            'links' => Values::array_get($payload, 'links'),
        ];

        $this->solution = ['workspaceSid' => $workspaceSid, 'sid' => $sid ?: $this->properties['sid'], ];
    }

    /**
     * Generate an instance context for the instance, the context is capable of
     * performing various actions.  All instance actions are proxied to the context
     *
     * @return TaskQueueContext Context for this TaskQueueInstance
     */
    protected function proxy(): TaskQueueContext {
        if (!$this->context) {
            $this->context = new TaskQueueContext(
                $this->version,
                $this->solution['workspaceSid'],
                $this->solution['sid']
            );
        }

        return $this->context;
    }

    /**
     * Fetch a TaskQueueInstance
     *
     * @return TaskQueueInstance Fetched TaskQueueInstance
     * @throws TwilioException When an HTTP error occurs.
     */
    public function fetch(): TaskQueueInstance {
        return $this->proxy()->fetch();
    }

    /**
     * Update the TaskQueueInstance
     *
     * @param array|Options $options Optional Arguments
     * @return TaskQueueInstance Updated TaskQueueInstance
     * @throws TwilioException When an HTTP error occurs.
     */
    public function update(array $options = []): TaskQueueInstance {
        return $this->proxy()->update($options);
    }

    /**
     * Deletes the TaskQueueInstance
     *
     * @return bool True if delete succeeds, false otherwise
     * @throws TwilioException When an HTTP error occurs.
     */
    public function delete(): bool {
        return $this->proxy()->delete();
    }

    /**
     * Access the statistics
     */
    protected function getStatistics(): TaskQueueStatisticsList {
        return $this->proxy()->statistics;
    }

    /**
     * Access the realTimeStatistics
     */
    protected function getRealTimeStatistics(): TaskQueueRealTimeStatisticsList {
        return $this->proxy()->realTimeStatistics;
    }

    /**
     * Access the cumulativeStatistics
     */
    protected function getCumulativeStatistics(): TaskQueueCumulativeStatisticsList {
        return $this->proxy()->cumulativeStatistics;
    }

    /**
     * Magic getter to access properties
     *
     * @param string $name Property to access
     * @return mixed The requested property
     * @throws TwilioException For unknown properties
     */
    public function __get(string $name) {
        if (\array_key_exists($name, $this->properties)) {
            return $this->properties[$name];
        }

        if (\property_exists($this, '_' . $name)) {
            $method = 'get' . \ucfirst($name);
            return $this->$method();
        }

        throw new TwilioException('Unknown property: ' . $name);
    }

    /**
     * Provide a friendly representation
     *
     * @return string Machine friendly representation
     */
    public function __toString(): string {
        $context = [];
        foreach ($this->solution as $key => $value) {
            $context[] = "$key=$value";
        }
        return '[Twilio.Taskrouter.V1.TaskQueueInstance ' . \implode(' ', $context) . ']';
    }
}