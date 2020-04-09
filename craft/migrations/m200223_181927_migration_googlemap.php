<?php
namespace craft\contentmigrations;

use craft\db\Migration;
use dgrigg\migrationassistant\MigrationAssistant;

/**
 * Generated migration
 */
class m200223_181927_migration_googlemap extends Migration
{
    /**
    Migration manifest:
    
    FIELD
        - googleAnalyticsCode
        - googleMapApi
            */

private $json = <<<'JSON'
{"settings":{"dependencies":[],"elements":{"fields":[{"group":"keys","name":"google analytics code","handle":"googleAnalyticsCode","instructions":"","translationMethod":"none","translationKeyFormat":null,"required":null,"searchable":"1","type":"craft\\fields\\PlainText","typesettings":{"placeholder":"","code":"","multiline":"","initialRows":"4","charLimit":null,"byteLimit":null,"columnType":"text"}},{"group":"keys","name":"google map api","handle":"googleMapApi","instructions":"","translationMethod":"none","translationKeyFormat":null,"required":null,"searchable":"1","type":"craft\\fields\\PlainText","typesettings":{"placeholder":"","code":"","multiline":"","initialRows":"4","charLimit":null,"byteLimit":null,"columnType":null}}]}}}
JSON;

	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    return MigrationAssistant::getInstance()->migrations->import($this->json);    }

    public function safeDown()
    {
        echo "m200223_181927_migration_googlemap cannot be reverted.\n";
        return false;
    }
}
